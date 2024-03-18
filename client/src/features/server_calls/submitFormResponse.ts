import { SERVER_URL } from "../../utils/config";
import { FormInput } from "../../utils/types";

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

  await response.json();

  return true;
};
