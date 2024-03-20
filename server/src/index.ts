import express, { Response } from "express";
import { PORT } from "./utils/utils";
import bodyParser from "body-parser";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import responseRoutes from "./routes/form.routes";
import compilerRoutes from "./routes/judge.routes";
import { ping } from "./services/redis/redis";

config();
const app = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(cors())
  .use(morgan(":method :url :status :res[content-length] - :response-time ms"))
  .use("/api/form", responseRoutes)
  .use("/api/compiler", compilerRoutes)
  .get("/", async (_, res: Response) => {
    console.log("New");
    const a = await ping();
    res.send(a);
  });

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
