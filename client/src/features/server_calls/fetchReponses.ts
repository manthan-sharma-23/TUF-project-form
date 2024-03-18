import { SERVER_URL } from "../../utils/config";
import { Data } from "../../utils/types";

export const fetchResponses = async () => {
  const response = await fetch(`${SERVER_URL}/api/form/fetch`);

  if (!response.ok) return null;

  const data: Data[] = await response.json();

  return data;
};
