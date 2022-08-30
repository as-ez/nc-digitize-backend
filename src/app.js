require("dotenv").config();
const express = require("express");
const indexRouter = require("./routes/index.routes");
const fileUpload = require("express-fileupload");
const jwt = require("jsonwebtoken");
const cors = require('cors')

const app = express();

// Settings
app.set("port", 3000);
app.set('secretKey',"digitize")

// Middlewares
app.use(cors({}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    debug: true,
  })
);

// Routes
app.use("/", indexRouter);

const validateUser = (req, res, next) => {
  jwt.verify(
    req.headers["x-access-token"],
    req.app.get("secretKey"),
    function (err, decoded) {
      if (err) {
        res.json({ message: err.message });
      } else {
        console.log(decoded);
        req.body.tokenData = decoded;
        next();
      }
    }
  );
};

app.validateUser = validateUser;

module.exports = app;
