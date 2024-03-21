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
import { useRecoilState, useRecoilValue } from "recoil";
import { formInputAtom } from "../features/store/atoms/formInput.state";
import { languageAtom } from "../features/store/atoms/languages.state";

const FormCredentialsInput = ({
  handleSubmitForm,
  handleReset,
}: {
  handleSubmitForm: () => void;
  handleReset: () => void;
}) => {
  const [formInput, setFormInput] = useRecoilState(formInputAtom);
  const languages = useRecoilValue(languageAtom);
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
                language: event.target.value,
              }))
            }
            defaultOpen={false}
            value={formInput.language}
            input={<OutlinedInput label="Select Code Language" />}
            className="w-full"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {languages &&
              languages.map((language) => {
                return (
                  <MenuItem
                    key={language.id}
                    value={language.id + " " + language.name}
                  >
                    {language.name}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <TextField
          id="outlined-controlled"
          label="Standard Input"
          value={formInput.std_input}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setFormInput((value) => ({
              ...value,
              std_input: event.target.value,
            }));
          }}
          className="w-full"
        />
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
