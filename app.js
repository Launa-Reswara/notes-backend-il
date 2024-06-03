import express from "express";
import routes from "./src/routes/index.js";
import { APP_PORT } from "./src/lib/utils/constants.js";
import cors from "cors";
import bodyParser from "body-parser";
import compression from "compression";
import dotenv from "dotenv";

dotenv.config();

const app = express();

async function main() {
  app.use(cors());
  app.options("*", cors());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  /**
   * Optimization technique using compression
   * @see https://expressjs.com/en/advanced/best-practice-performance.html
   */
  app.use(compression());

  app.use(routes);

  app.listen(APP_PORT, () => {
    console.log(`Listen to port ${APP_PORT}`);
  });
}

main();
