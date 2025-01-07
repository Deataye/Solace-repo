import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx"; // Ensure this file exists
import ServicesPage from "./pages/ServicesPage.jsx"; // Ensure this file exists
import SaleSection from "./components/SaleSection.jsx";
import ProductComponent from "./components/ProductComponent.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/" element={<SaleSection />} />
        <Route path="/product/:id" element={<ProductComponent />} />
      </Routes>
    </Router>
  );
}

export default App;
