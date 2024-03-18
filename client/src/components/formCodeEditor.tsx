import { TextField } from "@mui/material";
import React from "react";
import { FormInput } from "../utils/types";

const FormCodeEditor = ({
  formInput,
  setFormInput,
}: {
  formInput: FormInput;
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
}) => {
  return (
    <div className="h-full w-full px-2">
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
    </div>
  );
};

export default FormCodeEditor;
