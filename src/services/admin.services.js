const { encrypt, verified } = require("../module/bcrypt");
const { generateToken } = require("../module/jwt/auth");
const adminRepository = require("../repositories/admin.repositories");

const getAll = () => {
  const data = adminRepository.getAll();
  return data;
};

const create = async ({email, password}) => {
  const checkIs = await adminRepository.findOne(email);
  if(checkIs) return "ALREADY_ADMIN";

  const passHash = await encrypt(password);
  const admin = {email, password: passHash};
  const registerAdmin = adminRepository.create(admin);

  const token = generateToken(registerAdmin._id)

  return token;
}

const login = async ({email, password}) => {
  const checkIs = await adminRepository.findOne(email);
  if(!checkIs) return "NOT_FOUND_ADMIN";

  const passwordHash = checkIs.password
  const isCorrect = await verified(password, passwordHash);

  if(!isCorrect) return "PASSWORD_INCORRECT";

  const token = generateToken(checkIs._id);
  const data = {
    token,
    user: checkIs.email
  }

  return data;
}

module.exports = {
  getAll,
  create,
  login
};
