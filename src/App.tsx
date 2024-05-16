import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { MainRoutes } from "./router/routes";

export const App = () => {
  return (
    <>
    <Navbar />
    <MainRoutes />
    <Footer />
    </>
  );
}