import { useEffect, useState } from 'react';

type Response = {
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any | null;
  error: unknown | null;
};

function useFetch(path: string): Response {
  const [data, setData] = useState<never | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const endpoint = path.startsWith('http') ? path : path;
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [path]);

  return { data, error, isLoading };
}

export default useFetch;
