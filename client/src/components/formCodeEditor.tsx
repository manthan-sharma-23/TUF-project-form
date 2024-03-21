import { TextField } from "@mui/material";
import ExecutionOutput from "./executionOutput";
import { useRecoilState } from "recoil";
import { formInputAtom } from "../features/store/atoms/formInput.state";

const FormCodeEditor = () => {
  const [formInput, setFormInput] = useRecoilState(formInputAtom);
  return (
    <div className="h-full w-full  relative px-2">
      <TextField
        className="h-full w-full"
        id="outlined-multiline-static"
        label="Source Code"
        multiline
        rows={35}
        value={formInput.source_code}
        defaultValue="Enter your code :)"
        onChange={(event) =>
          setFormInput((value) => ({
            ...value,
            source_code: event.target.value,
          }))
        }
      />
      <ExecutionOutput />
    </div>
  );
};

export default FormCodeEditor;
