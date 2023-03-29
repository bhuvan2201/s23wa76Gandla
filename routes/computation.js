var express = require('express');
var router = express.Router();
var ran=Math.random()*100;
var x=0;
var y=0;
var z=0;
var a=0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  x=Math.pow(ran,2);
  y=Math.sign(ran);
  z=Math.tanh(ran);
  a=Math.trunc(ran);

  res.send(`pow function applied to ${ran} is ${x}, <br> sign function applied to ${ran} is ${y}, <br> tanh function applied to ${ran} is ${z} <br> trunc function applied to ${ran} is ${a}`);
});

module.exports = router;