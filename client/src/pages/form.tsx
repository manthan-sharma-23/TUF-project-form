import { Backdrop, CircularProgress } from "@mui/material";
import { useState } from "react";
import { FormInput, code_languages_available } from "../utils/types";
import { submitFormResponse } from "../features/server_calls/submitFormResponse";
import FormCredentialsInput from "../components/formCredentialsInput";
import FormCodeEditor from "../components/formCodeEditor";
import { useGetActiveLanguages } from "../features/hooks/useGetActiveLanguages";

const formValueInitial: Partial<FormInput> = {
  username: "",
  code_language: code_languages_available.JAVASCRIPT,
  source_code: "",
  std_input: "Keyboard",
};

// Page 1 :: Form Page
const Form = () => {
  const [formInput, setFormInput] = useState<FormInput>(formValueInitial);

  const [loading, setLoading] = useState(false);

  const languages = useGetActiveLanguages({setLoading});

  const handleSubmitForm = () => {
    if (!formInput.username || !formInput.code_language || !formInput.std_input)
      return;
    setLoading(true);
    setTimeout(() => {
      submitFormResponse(formInput)
        .then(() => setLoading(false))
        .catch((e) => {
          console.log(e);
          setLoading(false);
          handleReset();
        });
    }, 1500);
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
