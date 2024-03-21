import { useEffect } from "react";
import { fetchResponses } from "../server_calls/fetchReponses";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { LoadingAtom } from "../store/atoms/loading.state";
import { responsesAtom } from "../store/atoms/responses.state";
import { ResponseBundleCountAtom } from "../store/atoms/responseBundleCountState";

export const useGetResponses = () => {
  const [data, setData] = useRecoilState(responsesAtom);
  const bundle = useRecoilValue(ResponseBundleCountAtom);
  const setLoading = useSetRecoilState(LoadingAtom);

  useEffect(() => {
    setLoading(true);
    fetchResponses({ bundle })
      .then((data) => {
        setLoading(false);
        if (data === null) return;
        setData(data);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  }, [bundle]);

  return data;
};
