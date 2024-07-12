import { useEffect, useState } from "react";
import axios from '../api/index'

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const dataLoad = async () => {
      setLoading(true);
      try {
        const res = await axios(url);
        setData(res.data);

        if (!res.ok) {
          throw new Error(`Error: ${res.status} ${res.statusText}`);
        }

      }
      catch (err) {
        setError(err);
      }
      finally {
        setLoading(false);
      }
    };
    dataLoad();
  }, [url]);

  return { data, loading, error };
};
