const { hash } = require("bcrypt");

const hashStr = async (str) => {
  return await hash(str, 10);
};

module.exports = hashStr;
