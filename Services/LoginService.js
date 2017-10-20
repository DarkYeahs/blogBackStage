
const ccap = require('ccap')
const userDao = require('../Daos/UserDao')

class LoginService {
    getVerificationCode (req, res) {
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
      return a
    }

    login (account, password) {
      console.log(account, password)
      let promise = new Promise(function(resolve, reject) {
        userDao.findOne({userName: account, password: password}).exec(function (err, adventure) {
          if (err || !adventure) reject()
          else resolve(adventure)
        })
      })
      return promise
    }
}

module.exports = LoginService
