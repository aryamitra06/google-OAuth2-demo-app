import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Dashboard/> */}
      <Posts />
    </React.Fragment>
  );
}

export default App;
