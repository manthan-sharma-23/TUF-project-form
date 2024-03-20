import { JudgeExecutionResult } from "../../utils/type";
import { Judge0AuthHeaders } from "../../utils/utils";
export const submitCodeToJudge = async ({
  language_id,
  source_code,
  stdin,
}: {
  language_id: number;
  source_code: string;
  stdin?: string;
}) => {
  try {
    const response = await fetch(
      "https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          ...Judge0AuthHeaders,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language_id,
          source_code,
          stdin,
        }),
      }
    );
    if (!response.ok) {
      throw Error;
    }

    const data: JudgeExecutionResult = await response.json();

    return data;
  } catch (error) {
    throw Error(String(error));
  }
};
