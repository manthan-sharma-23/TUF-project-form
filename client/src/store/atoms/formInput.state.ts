import { atom } from "recoil";
import { FormInput } from "../../utils/types";

export const formValueInitial: FormInput = {
    username: "",
    source_code: "",
    std_input: null,
    language: "",
  };


export const formInputAtom=atom({
    key:"form/input/atom",
    default:formValueInitial
})