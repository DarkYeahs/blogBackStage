const userModel = require('../models/UserModel')

class UserDao {

  constructor () {
    this.userEntity = new userModel()
  }

  init () {

  }

  update (row) {
  }

  multDel (condition) {
    return this.userEntity.deleteMany(condition)
  }

  del (condition) {
    return this.userEntity.del
  }

  insert (row) {
    let userEntity = new userModel();
    userEntity.userName = '1550343909@qq.com';
    userEntity.password = '757669611.cn';
    userEntity.save(function (err,userInfo){
      console.log(err, userInfo)
    })
  }

  findOne (condition) {
    let userEntity = new userModel();
    return userModel.findOne(condition)
  }

  find (condtion) {

  }
}

module.exports = new UserDao();
