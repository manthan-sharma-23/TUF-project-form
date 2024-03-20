import { SERVER_URL } from "../../utils/config";
import { Language } from "../../utils/types";

export const getActiveCompilerLanguages = async () => {
  try {
    const response = await fetch(`${SERVER_URL}/api/compiler/languages`);

    if (!response.ok) throw Error();

    const data: Language[] = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
