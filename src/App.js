import React from "react";
import "./App.css";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <div className="App container">
      {/* <Home /> */}
      <Form />
    </div>
  );
}

export default App;
