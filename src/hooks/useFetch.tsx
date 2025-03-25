import { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type FetchParams = {
  params?: { [key: string]: string | number };
};

export const useFetch = (url: string) => {
  const [data, setData] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const getData = async (url: string) => {
    setIsLoading(true);
    setError(false);

    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch {
      setError(true);
      throw new Error("Произошла ошибка при запросе на сервер");
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = (params: FetchParams) => {
    const paramsString = new URLSearchParams(
      params.params as Record<string, string>
    ).toString();
    getData(`${url}?${paramsString}`);
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return { data, isLoading, error, refetch };
};
