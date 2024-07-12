import { useState } from "react";
import axios from '../api'

const usePost = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const postData = async (postData) => {
    setLoading(true);
    try {
      const response = await axios.post(url, postData);
      setData(response.data)
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, postData };
};

export default usePost