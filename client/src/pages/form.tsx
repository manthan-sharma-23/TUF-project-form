import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { FormInput } from "../utils/types";
import { submitFormResponse } from "../features/server_calls/submitFormResponse";
import FormCredentialsInput from "../components/formCredentialsInput";
import FormCodeEditor from "../components/formCodeEditor";
import { useGetActiveLanguages } from "../features/hooks/useGetActiveLanguages";

const formValueInitial: FormInput = {
  username: "",
  source_code: "",
  std_input: "Keyboard",
  language: "",
};

// Page 1 :: Form Page
const Form = () => {
  const [formInput, setFormInput] = useState<FormInput>(formValueInitial);

  const [loading, setLoading] = useState(false);

  const languages = useGetActiveLanguages({ setLoading });

  const handleSubmitForm = () => {
    if (!formInput.username || !formInput.language || !formInput.std_input)
      return;
    setLoading(true);
    submitFormResponse(formInput)
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const handleReset = () => {
    setFormInput(formValueInitial);
  };

  return (
    <div className="h-[93vh]  w-full flex justify-center items-center p-2">
      <div className="w-[20%] h-full">
        <FormCredentialsInput
          formInput={formInput}
          setFormInput={setFormInput}
          handleSubmitForm={handleSubmitForm}
          handleReset={handleReset}
          languages={languages}
        />
      </div>
      <div className="w-[80%] h-full">
        <FormCodeEditor formInput={formInput} setFormInput={setFormInput} />
      </div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Form;
