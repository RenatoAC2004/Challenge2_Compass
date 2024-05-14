import { Routes, Route } from "react-router-dom"
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { Contact } from "../pages/Contact";

export const MainRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
  );
}