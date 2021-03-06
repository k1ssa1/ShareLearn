const User   = require('../models/User.js');
const bcrypt = require('bcryptjs');

const validPassword = async (displayname,password) => {
  const user = await User.findOne({displayName : displayname,password});
  const isValid = await bcrypt.compare(password,user.password);
  if(isValid) return true;
  return false;
}

module.exports = {
  validPassword
};
