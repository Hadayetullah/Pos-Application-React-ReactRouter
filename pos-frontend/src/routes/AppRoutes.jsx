import React from "react";
import { Routes, Route } from "react-router-dom";

import POS from "../pages/POS";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<POS />} />
    </Routes>
  );
};

export default AppRoutes;
