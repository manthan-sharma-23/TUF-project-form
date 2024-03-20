import { Request, Response } from "express";
import { Language } from "../../utils/type";
import { getLanguagesCacheValue, setLanguagesCacheValue } from "../../services/redis/controller";

export const getActiveCompilerLanguages = async (
  _req: Request,
  res: Response
) => {
  try {
    let languages = await getLanguagesCacheValue();
    if (languages) {
      return res.json(languages).status(201);
    }
    const response = await fetch("https://ce.judge0.com/languages/all");
    const data: Language[] = await response.json();

    languages = data.filter((lang) => lang.is_archived === false);

    if (languages) {
      await setLanguagesCacheValue(languages);
    }

    return res.json(languages).status(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
