const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const RoleSchema = new Schema ({
  value: {type: String, unique: true,  default: "USER"}
});

module.exports = Role = mongoose.model('RouleInHospital', RoleSchema);