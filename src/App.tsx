import { Carousel } from "./components/Carousel";
import Navbar from "./components/Navbar";
import { MainRoutes } from "./router/routes";

export const App = () => {
  return (
    <>
    <Navbar />
    <Carousel />
    <MainRoutes />
    </>
  );
}