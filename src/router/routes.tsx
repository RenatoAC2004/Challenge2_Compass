import { Routes, Route } from "react-router-dom"
import { Homepage } from "../pages/Homepage";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { Contact } from "../pages/Contact";
import { Auth } from "../pages/Auth";
import { ProtectRoute } from "./ProtectRoute";

export const MainRoutes = () => {
  
  return (
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*"/>
        </Route>
      </Routes>
  );
}