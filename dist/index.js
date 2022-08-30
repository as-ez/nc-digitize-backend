const app = require("./app");

require('./config/db');

const main = () => {
  app.listen(app.get("port"));
  console.log(`Server on port ${app.get("port")}`);
};

main();