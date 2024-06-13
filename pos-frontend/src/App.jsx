// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// import AppRoutes from "./routes/AppRoutes";
import "./assets/index.css";

function App() {
  // const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="text-4xl">Hello</div>
    </BrowserRouter>
  );
}

export default App;
