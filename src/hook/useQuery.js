import { useState, useEffect } from "react";

const useQuery = (func) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const handleGetData = async () => {
    try {
      let data = await func();
      setData(data);
    } catch (err) {
      setError(err.response);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetData();
  }, []);

  return { data, loading, error };
};

export default useQuery;
