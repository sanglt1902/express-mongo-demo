
module.exports = {
  url: `mongodb://${process.env.app_db_username}:${process.env.app_db_pw}@localhost:27017/${process.env.app_db_name}?authSource=admin`
}