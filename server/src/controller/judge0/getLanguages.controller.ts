import { Request, Response } from "express";
import { Language } from "../../utils/type";

export const getActiveCompilerLanguages = async (
  _req: Request,
  res: Response
) => {
  try {
    const response = await fetch("https://ce.judge0.com/languages/all");
    const data: Language[] = await response.json();

    const languages = data.filter((lang) => lang.is_archived === false);

    return res.json(languages);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
};
