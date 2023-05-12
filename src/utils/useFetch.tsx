import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!url) {
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsLoaded(true);
        setData(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, [url]);

  return { data, isLoaded, error };
};

export default useFetch;
