import dotenv from "dotenv";
import mysql from "mysql2/promise";
import { DATABASE, HOST, PASSWORD } from "./constants.js";

dotenv.config();

export const pool = mysql.createPool({
  port: 3306,
  host: HOST,
  user: "root",
  password: PASSWORD,
  database: DATABASE,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});
