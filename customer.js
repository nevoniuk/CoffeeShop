const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const customerSchema = new Schema({
  type:{
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }

}, { timestamps:true });

const Customer = mongoose.model('Customer', customerSchema);
