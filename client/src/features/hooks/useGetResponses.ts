import { useEffect, useState } from "react";
import { Data } from "../../utils/types";
import { fetchResponses } from "../server_calls/fetchReponses";
import { useSetRecoilState } from "recoil";
import { LoadingAtom } from "../store/atoms/loading.state";

export const useGetResponses = () => {
  const [data, setData] = useState<Data[] | null>(null);
  const setLoading = useSetRecoilState(LoadingAtom);

  useEffect(() => {
    setLoading(true);
    fetchResponses()
      .then((data) => {
        setLoading(false);
        if (data === null) return;
        setData(data);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, []);

  return data;
};
