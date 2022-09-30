const jwt = require("jsonwebtoken");
const { verifyToken } = require('../module/jwt/auth')

const checkJwt = async (req, res, next) => {
  try {
    
    const token = req.headers["x-access-token"];
    if (!token) {
      return res
        .status(401)
        .send({ auth: false, message: "No Token was Provided" });
    }
  
    const decoded = verifyToken(token)
    if(!decoded) {
      return res
        .status(401)
        .send({ auth: false, message: "Invalid Token" })
    }

    req.userId = decoded.id;
    console.log(decoded)
    next();
  }catch(e){
    res.status(400).send("SESION_NO_VALIDA")
  }
}

module.exports = {
  checkJwt,
};