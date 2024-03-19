import { Request, Response } from "express";
import { db } from "../utils/db";
import { getCacheValue, setCacheValue } from "../services/redis";
import { Data } from "../utils/type";

export const fetchSubmittedResponses = async (req: Request, res: Response) => {
  try {
    const responseCachedValue = await getCacheValue();
    if (responseCachedValue) {
      return res.status(201).json(responseCachedValue);
    }
    const responses = await db.responses.findMany({
      orderBy: {
        submitted_at: "desc",
      },
      take: 15,
    });
    await setCacheValue(responses);

    return res.status(201).json(responses);
  } catch (error) {
    return res.sendStatus(500);
  }
};
