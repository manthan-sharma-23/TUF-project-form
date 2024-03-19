import { Request, Response } from "express";
import { db } from "../utils/db";
import { redis, removeCacheValue } from "../services/redis";
import { REDIS_CACHE_KEY } from "../utils/utils";

//Submit a user input form
export const submitResponse = async (req: Request, res: Response) => {
  try {
    const { username, code_language, source_code, timeStamp, std_input } =
      req.body;

    console.log(username, code_language, source_code, std_input);

    if (!username || !code_language || !source_code) {
      return res.sendStatus(401);
    }

    const queryResponseToDB = await db.responses.create({
      data: {
        username,
        code_language,
        source_code,
        submitted_at: new Date(timeStamp),
        stdin: std_input,
      },
    });

    await removeCacheValue();

    return res.json({ response: queryResponseToDB }).status(202);
  } catch (error) {
    return res.sendStatus(500);
  }
};
