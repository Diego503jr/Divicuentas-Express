import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthCustomerProvider } from "./context/AuthCustomerProvider";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AboutsUs from "./pages/AboutsUs";
import Menu from "./pages/Menu";
import Food from "./pages/Food";
import Bills from "./pages/Bills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthCustomerProvider>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Contact />} path="/contact" />
            <Route element={<Services />} path="/services" />
            <Route element={<AboutsUs />} path="/about-us" />
            <Route element={<Menu />} path="/menu" />
            <Route element={<Food />} path="/food" />
            <Route element={<Bills />} path="/bills" />
            <Route element={<h1>Not Found....</h1>} path="*" />
          </Routes>
        </AuthCustomerProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
