import { Router } from "express";
import { getActiveCompilerLanguages } from "../controller/judge0/getLanguages.controller";

const router: Router = Router();

router.get("/languages", getActiveCompilerLanguages);

export default router;
