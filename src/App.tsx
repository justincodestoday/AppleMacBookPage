import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";
import ProductSelectionPage from "./components/product/ProductSelectionPage";
import ProductDetailPage from "./components/product/ProductDetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductSelectionPage />} />
        <Route path="/:productDetails" element={<ProductDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
