import { useEffect, useState } from "react";

const useFetch = (url: string, factory?: any, type?: string) => {
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

        if (factory && type) {
          const newData = data.map((item: any) => {
            return new factory(item, type);
          });
          console.log(newData);
          setData(newData);
          return;
        }

        // setData(data);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, [url, factory, type]);

  return { data, isLoaded, error };
};

export default useFetch;
