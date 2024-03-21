import { Request, Response } from "express";
import { db } from "../utils/db";
import {
  getResponseCacheValue,
  setResponseCacheValue,
} from "../services/redis/controller";
import { oneTimeFetchTake } from "../utils/utils";

export const fetchSubmittedResponses = async (req: Request, res: Response) => {
  try {
    const { bundle } = req.params;
    const bundleNo = Number(bundle) <= 0 ? 1 : Number(bundle);
    const responseCachedValue = await getResponseCacheValue();
    if (
      responseCachedValue &&
      responseCachedValue.length >= oneTimeFetchTake * bundleNo
    ) {
      return res.status(200).json(responseCachedValue);
    }
    const responses = await db.responses.findMany({
      orderBy: {
        submitted_at: "desc",
      },
      take: oneTimeFetchTake * bundleNo,
    });
    await setResponseCacheValue(responses);

    return res.status(200).json(responses);
  } catch (error) {
    console.error("Error fetching submitted responses:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
