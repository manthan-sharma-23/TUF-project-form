import { atom } from "recoil";
import { JudgeExecutionResult } from "../../../utils/types";

const output: Partial<JudgeExecutionResult> = {};

export const formOutputAtom = atom({
  key: "form/output/atom",
  default: output,
});
