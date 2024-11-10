import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../Utils/RapidApi";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("New");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = async (query) => {
    setLoading(true);
    try {
      const {contents} = await fetchData(`search/?q=${query}`);
      setData(contents);
      
    } catch (error) {
      console.log("Error in loading data");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return(
    <AuthContext.Provider value={{ loading, data, value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
