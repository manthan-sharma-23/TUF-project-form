import { Request, Response } from "express";
import { db } from "../utils/db";
import { getResponseCacheValue, setResponseCacheValue } from "../services/redis/controller";

export const fetchSubmittedResponses = async (req: Request, res: Response) => {
  try {
    const responseCachedValue = await getResponseCacheValue();
    if (responseCachedValue) {
      return res.status(201).json(responseCachedValue);
    }
    const responses = await db.responses.findMany({
      orderBy: {
        submitted_at: "desc",
      },
      take: 15,
    });
    await setResponseCacheValue(responses);

    return res.status(201).json(responses);
  } catch (error) {
    return res.sendStatus(500);
  }
};
