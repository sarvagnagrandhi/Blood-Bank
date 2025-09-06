import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import Spinner from "../shared/Spinner"; // Adjust the path if different

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const [isVerified, setIsVerified] = useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setIsVerified(false);
          return;
        }

        const { data } = await API.get("/auth/current-user");
        if (data?.success) {
          dispatch(getCurrentUser(data));
          setIsVerified(true);
        } else {
          localStorage.clear();
          setIsVerified(false);
        }
      } catch (error) {
        localStorage.clear();
        setIsVerified(false);
      }
    };

    verifyUser();
  }, [dispatch]);

  if (isVerified === null) {
    return <Spinner />;
  }

  return isVerified ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
