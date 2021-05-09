const dbConfig = require("../config/db.config.js");
const { initProductModel } = require("./product.model.js")
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.product = (initProductModel(mongoose));

module.exports = db;