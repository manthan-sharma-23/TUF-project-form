import { Request, Response } from "express";
import { db } from "../utils/db";

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

    return res.json({ response: queryResponseToDB }).status(202);
  } catch (error) {
    return res.sendStatus(500);
  }
};
