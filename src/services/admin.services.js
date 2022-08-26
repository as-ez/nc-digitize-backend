const adminRepository = require("../repositories/admin.repositories");

const getAll = () => {
  const data = adminRepository.getAll();
  return data;
};

module.exports = {
  getAll,
};
