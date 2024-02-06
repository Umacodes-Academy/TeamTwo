const { MongoClient } = require("mongodb");
const winston = require("winston");
require("winston-mongodb");
require("express-async-errors");

let dbUrl;
switch (process.env.NODE_ENV) {
    case 'production':
        dbUrl = process.env.DB_CONNECTION_PROD;
        break;
    case 'test':
        dbUrl = process.env.DB_CONNECTION_TEST;
        break;
    default:
        dbUrl = process.env.DB_CONNECTION_DEV;
}

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
          return `${timestamp} ${level}: ${message}`;
        })
      ),
      level: "info",
    }),
    new winston.transports.File({ filename: "uncaughtExceptions.log" })
  );

  process.on("unhandledRejection", ex => {
    throw ex;
  });

  winston.add(new winston.transports.File({ filename: "logfile.log" }));

  const mongoClient = new MongoClient(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  // const mongoClient = new MongoClient(  process.env.LOCAL_DB, { useNewUrlParser: true, useUnifiedTopology: true })

  mongoClient.connect();

  winston.add(
    new winston.transports.MongoDB({
      db: mongoClient.db(),
      level: "info",
    })
  );
};