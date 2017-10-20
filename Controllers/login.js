let express = require('express');
let router = express.Router();
let LoginService = require('../Services/LoginService')
const loginService = new LoginService()
/* GET home page. */
router.get('/getVerificationCode', function(req, res, next) {

  let verificationCode = loginService.getVerificationCode()
  let data = null
  if (verificationCode.length !== 0) {
    data = {
      code: 0,
      msg: 'success',
      data: {
        url: 'data:image/bmp;base64,' + verificationCode[1].toString('base64'),
        code: verificationCode[0]
      }
    }
  }
  else data = {
    code: 500,
    msg: '内部错误'
  }
  res.json(data)
  // res.send(a[1])
});

router.post('/login', function (req, res, next) {
  let data = req.body
  let account = data.account
  let password = data.password
  loginService.login(account, password)
    .then(function(data) {
      console.log(res)
      res.json({
        code: 0,
        msg: 'success'
      })
    }).catch(function () {
      res.json({
        code: 400000000,
        msg: 'success'
      })
    })
})

module.exports = router;
