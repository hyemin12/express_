const mysql = require("mysql2/promise");
const dotenv = require("dotenv");
dotenv.config();
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const dbConfig = {
  connectionLimit: 10,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
};

// connection pool 사용하면 메모리 사용량 감소, 속도향상의 장점이 있음
const pool = mysql.createPool(dbConfig);

module.exports = pool;
