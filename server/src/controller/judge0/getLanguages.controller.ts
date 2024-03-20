import { Request, Response } from "express";
import { Language } from "../../utils/type";
import {
  getLanguagesCacheValue,
  setLanguagesCacheValue,
} from "../../services/redis/controller";
import { JUDGE_API, Judge0AuthHeaders } from "../../utils/utils";

export const getActiveCompilerLanguages = async (
  _req: Request,
  res: Response
) => {
  try {
    let languages = await getLanguagesCacheValue();
    if (languages && languages?.length > 0) {
      return res.json(languages).status(201);
    }
    const response = await fetch(JUDGE_API + "/languages", {
      method: "GET",
      headers: {
        ...Judge0AuthHeaders,
        "Content-Type": "application/json",
      },
    });
    const data: Language[] = await response.json();
    console.log(data);

    await setLanguagesCacheValue(data);

    return res.json(data).status(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
