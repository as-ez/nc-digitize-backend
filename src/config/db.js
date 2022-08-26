const mongoose = require("mongoose");
const config = require("../config");

(async () => {
  const db = await mongoose.connect(config.mongo.mongoUri || "mongodb://localhost/digitize", {
    useNewUrlParser: true,
  });
  console.log("Database is connected to:", db.connection.name);
})();
