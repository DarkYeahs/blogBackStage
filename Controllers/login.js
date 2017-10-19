var express = require('express');
var router = express.Router();
const ccap = require('ccap')

/* GET home page. */
router.get('/getVerificationCode', function(req, res, next) {

  let randNum = Math.random()
  randNum = Math.round(randNum * 10000)
  if (randNum < 1000) randNum = '0' + randNum
  else randNum = randNum + ''
  console.log('test')
  var verificationCode = ccap({
      width: 80,
      height: 35,
      offset: 20,
	    quality: 100,
      fontsize: 30,
      generate:function(){//自定义生成随机数
        return randNum
      }
  })
  var a = verificationCode.get()
  res.json({
    code: 0,
    msg: 'success',
    data: {
      url: 'data:image/bmp;base64,' + a[1].toString('base64'),
      code: a[0]
    }
  })
  // res.send(a[1])
});

module.exports = router;
