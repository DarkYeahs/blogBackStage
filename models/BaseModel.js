const mongoose = require('mongoose');
const Schema = mongoose.Schema

class BaseModel {
  constructor(opt) {
    this.schema = null
    this.name = opt.name
    this.configuration = opt.configuration
    this.createSchema()
    // this.createModel()
  }

  createSchema () {
    this.schema = new Schema(this.configuration);
  }

  createModel () {
    mongoose.model(this.name, this.schema);
  }

  getModel () {
    return mongoose.model(this.name)
  }
}

module.exports = BaseModel;
