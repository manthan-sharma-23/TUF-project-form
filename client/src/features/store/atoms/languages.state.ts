import { atom } from "recoil";
import { Language } from "../../../utils/types";

const intiailState: Language[] = [];

export const languageAtom = atom({
  key: "language/atom",
  default: intiailState,
});
