import { atom } from "recoil";
import { Data } from "../../../utils/types";

const responses: Data[] = [];

export const responsesAtom = atom({
  key: "responses/atom",
  default: responses,
});
