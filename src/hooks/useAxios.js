import { useEffect, useState } from "react";
import { v1 as uuid } from "uuid";

import axios from "axios";

const useAxios = (url, options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const addData = async () => {
    try {
      const res = await axios.get(url, options);
      setData((data) => [...data, { ...res.data, id: uuid() }]);
      console.log("Data:", data);
    } catch (e) {
      setError(e);
      console.error("Error adding card:", e);
    }
  };
  return { data, error, addData };
};
export default useAxios;
