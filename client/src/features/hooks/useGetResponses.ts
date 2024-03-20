import { useEffect, useState } from "react";
import { Data } from "../../utils/types";
import { fetchResponses } from "../server_calls/fetchReponses";

export const useGetResponses = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [data, setData] = useState<Data[] | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchResponses()
      .then((data) => {
        setLoading(false);
        if (data === null) return;
        console.log(data)
        setData(data);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
      });
  },[]);

  return data;
};
