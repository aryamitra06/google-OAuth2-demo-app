import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </Router>
  );
}

export default App;
