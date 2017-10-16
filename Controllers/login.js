var express = require('express');
var router = express.Router();
const ccap = require('ccap')

/* GET home page. */
router.get('/getVerificationCode', function(req, res, next) {
  var verificationCode = ccap({
      width:400, //宽
      height:400,//高
      offset:40,//马赛克数值
      generate:function(){//自定义生成随机数
          this.width;
          this.height;
          return "abcdefg";
      }
  })
  var a = verificationCode.get()
  res.json({
    code: 0,
    msg: 'success',
    data: {
      url: 'data:image/bmp;base64,' + a[1].getFileData().toString('base64'),
      code: a[0]
    }
  })
  // res.send(a[1])
});

module.exports = router;
