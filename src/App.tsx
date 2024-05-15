import {Routes, Route} from "react-router-dom"
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <>
    <div>
      <Routes>
        <Route path="/aboutus" element={<AboutUs />}></Route>
      </Routes>
    </div>
    </>
  );
}

export default App;
