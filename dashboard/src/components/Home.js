import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.post(
          "https://zerodha-clone-edcx.onrender.com",
          {},
          { withCredentials: true },
        );

        if (data.status) {
          setUsername(data.user);

          toast(`Welcome ${data.user}`, {
            position: "top-right",
          });
        } else {
          window.location.href = "http://localhost:3001/login";
        }
      } catch (error) {
        console.log("Authentication failed:", error);
        window.location.href = "http://localhost:3001/login";
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post(
        "https://zerodha-clone-edcx.onrender.com/logout",
        {},
        { withCredentials: true },
      );
    } catch (error) {
      console.log("Logout error:", error);
    } finally {
      window.location.href = "http://localhost:3001/login";
    }
  };

  if (loading) {
    return <h2>Verifying authentication...</h2>;
  }

  return (
    <>
      <TopBar username={username} handleLogout={handleLogout} />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;
