// useFetchData.jsx
import { useState, useEffect } from "react";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //check if data is in localsorage get it and transform to object
        const storedData = localStorage.getItem("storedData");
        if (storedData) {
          setData(JSON.parse(storedData));
          setLoading(false);
        } else {
          //fetch data from the server if not in localStorage and set it in localstorage.
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
          localStorage.setItem("storedData", JSON.stringify(result));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
