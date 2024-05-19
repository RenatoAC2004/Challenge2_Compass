import { QueryClient, QueryClientProvider } from "react-query";
import { MainRoutes } from "./router/routes";
import { Footer } from "./components/Footer";
import { Error } from "./pages/Errorpage";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <MainRoutes /> */}
    
    <Navbar/>
    <Error/>
    <Footer/>
  
    </QueryClientProvider>

  );
}