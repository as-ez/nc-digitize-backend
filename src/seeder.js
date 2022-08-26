require('./config/db')
require("colors");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const fs = require("fs");

dotenv.config();

const Card = require("./models/Card");

const cards = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/cards.json`, "utf-8")
);

const importData = async () => {
  try {
    await Card.create(cards);
    console.log("Cards Imported...".green.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

const deleteData = async () => {
  try {
    await Card.deleteMany();
    console.log("Cards Destroyed...".red.inverse);
    process.exit();
  } catch (err) {
    console.error(err);
  }
};

if (process.argv[2] === '-i') {
    importData();
} else if (process.argv[2] === '-d') {
    deleteData();
}