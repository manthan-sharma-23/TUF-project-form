import { Backdrop, CircularProgress } from "@mui/material";
import { submitFormResponse } from "../features/server_calls/submitFormResponse";
import FormCredentialsInput from "../components/formCredentialsInput";
import FormCodeEditor from "../components/formCodeEditor";
import { useGetActiveLanguages } from "../features/hooks/useGetActiveLanguages";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  formInputAtom,
  formValueInitial,
} from "../features/store/atoms/formInput.state";
import { LoadingAtom } from "../features/store/atoms/loading.state";
import { formOutputAtom } from "../features/store/atoms/execOutput.state";

// Page 1 :: Form Page
const Form = () => {
  const [formInput, setFormInput] = useRecoilState(formInputAtom);
  const setStdOut = useSetRecoilState(formOutputAtom);
  const [loading, setLoading] = useRecoilState(LoadingAtom);
  useGetActiveLanguages();

  const handleSubmitForm = () => {
    if (!formInput.username || !formInput.language) return;
    setLoading(true);
    submitFormResponse(formInput)
      .then((data) => {
        setStdOut(data);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  };

  const handleReset = () => {
    setFormInput(formValueInitial);
    setStdOut({});
  };

  return (
    <div className="h-[93vh]  w-full flex justify-center items-center p-2 py-3">
      <div className="w-[20%] h-full">
        <FormCredentialsInput
          handleSubmitForm={handleSubmitForm}
          handleReset={handleReset}
        />
      </div>
      <div className="w-[80%] h-full">
        <FormCodeEditor />
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
