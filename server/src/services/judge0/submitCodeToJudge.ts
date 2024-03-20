import { JudgeExecutionResult } from "../../utils/type";
import { JUDGE_API, Judge0AuthHeaders } from "../../utils/utils";

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
    console.log(source_code, stdin, language_id);
    const response = await fetch(
      JUDGE_API + "/submissions?base64_encoded=false&wait=true",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...Judge0AuthHeaders,
        },
        body: JSON.stringify({
          language_id,
          source_code,
          stdin,
        }),
      }
    );

    const data: JudgeExecutionResult = await response.json();

    return data;
  } catch (error) {
    throw Error(String(error));
  }
};
