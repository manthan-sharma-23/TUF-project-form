import { useEffect, useState } from "react";
import { Language } from "../../utils/types";
import { getActiveCompilerLanguages } from "../server_calls/getActiveCompilerLanguages";

export const useGetActiveLanguages = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [languages, setLanguages] = useState<Language[]>([]);

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
