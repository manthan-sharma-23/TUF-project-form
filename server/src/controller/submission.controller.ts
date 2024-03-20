import { Request, Response } from "express";
import { db } from "../utils/db";
import { removeResponseCacheValue } from "../services/redis/controller";
import { submitCodeToJudge } from "../services/judge0/submitCodeToJudge";

//Submit a user input form
export const submitResponse = async (req: Request, res: Response) => {
  try {
    const { username, language, source_code, timeStamp, std_input } = req.body;

    if (!username || !source_code || !language) {
      return res.sendStatus(401);
    }

    const [code_language_id, code_language_name] = language.split(" ");

    const compileResult = await submitCodeToJudge({
      source_code,
      language_id: Number(code_language_id),
      stdin: std_input,
    });

    console.log(compileResult);

    await db.responses.create({
      data: {
        username,
        code_language: code_language_name,
        source_code,
        code_language_id: Number(code_language_id),
        submitted_at: new Date(timeStamp),
        stdin: std_input,
        stdout: compileResult.stdout,
        status: compileResult.status.description,
        stderr: compileResult.stderr,
      },
    });

    await removeResponseCacheValue();

    return res
      .json({
        output: compileResult.stdout,
        execution_time: compileResult.time,
      })
      .status(202);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
