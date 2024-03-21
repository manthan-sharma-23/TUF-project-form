import { useEffect } from "react";
import { getActiveCompilerLanguages } from "../server_calls/getActiveCompilerLanguages";
import { useRecoilState } from "recoil";
import { languageAtom } from "../../store/atoms/languages.state";

export const useGetActiveLanguages = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [languages, setLanguages] = useRecoilState(languageAtom);

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
