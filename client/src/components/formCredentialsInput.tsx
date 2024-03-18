import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";
import { code_languages_available, FormInput } from "../utils/types";

const FormCredentialsInput = ({
  formInput,
  setFormInput,
  handleSubmitForm,
  handleReset,
}: {
  formInput: FormInput;
  setFormInput: React.Dispatch<React.SetStateAction<FormInput>>;
  handleSubmitForm: () => void;
  handleReset: () => void;
}) => {
  return (
    <div className="h-full w-full flex justify-between items-center flex-col gap-5 pl-4">
      <div className="flex flex-col justify-start items-center gap-5 w-full">
        <TextField
          id="outlined-controlled"
          label="Username"
          value={formInput.username}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormInput((value) => ({
              ...value,
              username: event.target.value,
            }));
          }}
          className="w-full"
        />
        <FormControl className="w-full">
          <InputLabel id="demo-multiple-name-label">
            Select Code Language
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            onChange={(event: SelectChangeEvent) =>
              setFormInput((value) => ({
                ...value,
                code_language: event.target.value,
              }))
            }
            defaultOpen={false}
            defaultValue={code_languages_available.JAVASCRIPT}
            value={formInput.code_language}
            input={<OutlinedInput label="Select Code Language" />}
            className="w-full"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={code_languages_available.C}>
              {code_languages_available.C}
            </MenuItem>
            <MenuItem value={code_languages_available.CPP}>
              {code_languages_available.CPP}
            </MenuItem>
            <MenuItem value={code_languages_available.JAVA}>
              {code_languages_available.JAVA}
            </MenuItem>
            <MenuItem value={code_languages_available.JAVASCRIPT}>
              {code_languages_available.JAVASCRIPT}
            </MenuItem>
            <MenuItem value={code_languages_available.TYPESCRIPT}>
              {code_languages_available.TYPESCRIPT}
            </MenuItem>
            <MenuItem value={code_languages_available.PHP}>
              {code_languages_available.PHP}
            </MenuItem>
            <MenuItem value={code_languages_available.GOLANG}>
              {code_languages_available.GOLANG}
            </MenuItem>
            <MenuItem value={code_languages_available.RUST}>
              {code_languages_available.RUST}
            </MenuItem>
          </Select>
        </FormControl>
        <FormControl className="w-full">
          <InputLabel id="demo-multiple-name-label">
            Select Standard Input
          </InputLabel>
          <Select
            labelId="demo-multiple-name-label"
            id="demo-multiple-name"
            value={formInput.std_input}
            defaultOpen={false}
            defaultValue="Keyboard"
            onChange={(event: SelectChangeEvent) =>
              setFormInput((value) => ({
                ...value,
                std_input: event.target.value,
              }))
            }
            input={<OutlinedInput label="Select Standard Input" />}
            className="w-full"
          >
            <MenuItem value={"Keyboard"}>Keyboard</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="flex justify-start items-center gap-5 w-full my-4">
        <Button onClick={handleSubmitForm} variant="contained" size="large">
          SUBMIT
        </Button>

        <Button
          variant="outlined"
          size="large"
          color="primary"
          onClick={handleReset}
        >
          RESET
        </Button>
      </div>
    </div>
  );
};

export default FormCredentialsInput;
