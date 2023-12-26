import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import axios from "axios";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8443/api/user", {
          withCredentials: true,
        });
        setUserData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(userData);

  const isUserLoggedIn = userData?.isLoggedIn;
  return (
    <Router>
      <Navbar userData={userData} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            isUserLoggedIn ? (
              <Home userData={userData} />
            ) : (
              <Navigate to={"/auth"} />
            )
          }
        />
        <Route
          exact
          path="/posts"
          element={isUserLoggedIn ? <Posts /> : <Navigate to={"/auth"} />}
        />
        <Route
          exact
          path="/auth"
          element={!isUserLoggedIn ? <Auth /> : <Navigate to={"/"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
