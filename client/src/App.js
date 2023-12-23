import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  const user = false;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/posts"
          element={user ? <Posts /> : <Navigate to={"/auth"} />}
        />
        <Route
          exact
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to={"/auth"} />}
        />
        <Route
          exact
          path="/auth"
          element={user ? <Navigate to={"/"} /> : <Auth />}
        />
      </Routes>
    </Router>
  );
}

export default App;
