import { Router } from "express";
import { fetchSubmittedResponses } from "../controller/fetch.controller";
import { submitResponse } from "../controller/submission.controller";

const router: Router = Router();

router.post("/submit", submitResponse);
router.get("/fetch/:bundle", fetchSubmittedResponses);

export default router;
