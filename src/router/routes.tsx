import { Routes, Route } from "react-router-dom"
import { Homepage } from "../pages/Homepage/Homepage";
import { Product } from "../pages/Product";
import { Register } from "../pages/Register";
import { Auth } from "../pages/Auth";
import { ProtectRoute } from "./ProtectRoute";
import AboutUs from "../pages/AboutUs";
import { AllProducts } from "../pages/AllProducts";

export const MainRoutes = () => {
  
  return (
      <Routes>
        <Route path="/auth" element={<Auth />}/>
        <Route element={<ProtectRoute />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="*"/>
        </Route>
      </Routes>
  );
}