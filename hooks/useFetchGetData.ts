import { useEffect, useState } from "react";

interface FetchDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

type ProcessDataFn<T> = (data: T) => T;

/**
 *
 * @param url
 * @param processData
 * @returns data,setData,loading,error
 */
const useFetchGetData = <T>(
  url: string,
  processData: ProcessDataFn<T> = (data) => data
) => {
  const [data, setData] = useState<T | []>([]);
  const [error, setError] = useState<string | null>(null);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsloading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const results: T = await response.json();
        const processedData: T = processData(results);
        setData(processedData);
        setIsloading(false);
      } catch (err) {
        console.error(err);
        setError(JSON.stringify(err));
        setIsloading(false);
      }
    };
    fetchData();
  }, [url, processData, error]);


  //Return Hooks
  return { data, setData, error, isloading };
};

export default useFetchGetData;