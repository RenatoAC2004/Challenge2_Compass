import { QueryClient, QueryClientProvider } from "react-query";
import { MainRoutes } from "./router/routes";

const queryClient = new QueryClient()

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <MainRoutes />
    </QueryClientProvider>
  );
}