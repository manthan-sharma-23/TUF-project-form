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
import React, { useState } from "react";
import { FormInput, code_languages_available } from "../utils/types";

const formValueInitial: Partial<FormInput> = {
  username: "",
  code_language: code_languages_available.JAVASCRIPT,
  source_code: "",
  std_input: "Keyboard",
};

const Form = () => {
  const [formInput, setFormInput] =
    useState<Partial<FormInput>>(formValueInitial);

  return (
    <div className="h-[93vh]  w-full flex justify-center items-center py-2">
      <div className="w-[70%] border-2 h-full rounded-lg shadow-lg px-[8vw] py-5 flex flex-col gap-4 ">
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
        <div className="w-full flex gap-3">
          <FormControl className="w-1/2">
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
          <FormControl className="w-1/2">
            <InputLabel id="demo-multiple-name-label">
              Select Standard Input
            </InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              value={formInput.std_input}
              onChange={(event: SelectChangeEvent) =>
                setFormInput((value) => ({
                  ...value,
                  std_input: event.target.value,
                }))
              }
              input={<OutlinedInput label="Select Standard Input" />}
              className="w-full"
            >
              <MenuItem value={"Keyboard"}>KeyBoard</MenuItem>
            </Select>
          </FormControl>
        </div>
        <TextField
          id="outlined-multiline-static"
          label="Source Code"
          multiline
          rows={25}
          value={formInput.source_code}
          defaultValue="Enter your code :)"
          onChange={(event) =>
            setFormInput((value) => ({
              ...value,
              source_code: event.target.value,
            }))
          }
        />
        <div className="flex justify-start items-center gap-5">
          <Button variant="contained" size="large" color="info">
            SUBMIT
          </Button>
          <Button
            variant="outlined"
            size="large"
            color="info"
            onClick={() => {
              console.log(formInput);
              console.log("New");
              setFormInput(formValueInitial);
              console.log(formInput);
            }}
          >
            RESET
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
