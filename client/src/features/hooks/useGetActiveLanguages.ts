import { useEffect } from "react";
import { getActiveCompilerLanguages } from "../server_calls/getActiveCompilerLanguages";
import { useRecoilState, useSetRecoilState } from "recoil";
import { languageAtom } from "../store/atoms/languages.state";
import { LoadingAtom } from "../store/atoms/loading.state";

export const useGetActiveLanguages = () => {
  const [languages, setLanguages] = useRecoilState(languageAtom);
  const setLoading = useSetRecoilState(LoadingAtom);

  useEffect(() => {
    setLoading(true);
    getActiveCompilerLanguages()
      .then((data) => {
        if (data) {
          setLanguages(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        return null;
      });
  }, []);

  return languages;
};
