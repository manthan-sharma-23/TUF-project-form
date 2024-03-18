import { Router } from "express";
import { fetchSubmittedResponses } from "../controller/fetch.controller";
import { submitResponse } from "../controller/submission.controller";

const router: Router = Router();

router
  .post("/submit", submitResponse)
  .get("/fetch", fetchSubmittedResponses);

export default router;
