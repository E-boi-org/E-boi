import { useEffect, useState } from "react";
import axios from "axios";

function useApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://e-boi-api.adaptable.app/products"
      );
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, fetchData, loading, error };
}

export default useApi;
