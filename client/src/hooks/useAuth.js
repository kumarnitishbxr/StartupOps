import { useEffect, useState } from "react";
import api from "../API/axiosClient";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  const fetchUser = async () => {
    try {
      const res = await api.get("/api/auth");
      setUser(res.data);
      setAuthenticated(true);
    } catch (error) {
      setUser(null);
      setAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return {
    user,
    loading,
    authenticated,
    refreshAuth: fetchUser,
  };
};

export default useAuth;
