import { useState, useEffect } from 'react';

const useFetch = (callback: () => Promise<any>, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await callback();
      setData(result);
    } catch (err) {
      setError(err);
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (immediate) {
      fetch();
    }
  }, [immediate]);

  return { data, loading, error, refetch: fetch };
};

export default useFetch;