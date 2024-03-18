import { Request, Response } from "express";
import { db } from "../utils/db";

export const fetchSubmittedResponses = async (req: Request, res: Response) => {
  try {
    const entries = await db.responses.findMany({
      orderBy: {
        submitted_at: "desc",
      },
      take: 100,
    });

    return res.status(201).json(entries);
  } catch (error) {
    return res.sendStatus(500);
  }
};
