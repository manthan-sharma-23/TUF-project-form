import { SERVER_URL } from "../../utils/config";
import { FormInput, JudgeExecutionResult } from "../../utils/types";

export const submitFormResponse = async (target: FormInput) => {
  const response = await fetch(`${SERVER_URL}/api/form/submit`, {
    method: "POST",
    body: JSON.stringify({
      ...target,
      timeStamp: new Date(),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw Error;
  }

  const data: JudgeExecutionResult = await response.json();

  return data;
};
