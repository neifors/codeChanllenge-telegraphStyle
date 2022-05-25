const { MongoClient } = require('mongodb')
require('dotenv').config()
const connectionUrl = process.env.DB_CONNECTION;
const dbName = process.env.DB_NAME

const init = async () => {
  let client = await MongoClient.connect(connectionUrl)
  console.log('connected to database!', dbName)
  return client.db(dbName)
}


module.exports = { init };
