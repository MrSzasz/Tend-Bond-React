import "./App.scss";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import WhatsappFAB from "./components/WhatsappFAB/WhatsappFAB";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ProductDetailsContainer from "./components/ProductDetailsContainer/ProductDetailsContainer";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/products" element={<ProductsContainer />} />
        <Route path="/products/detalle" element={<ProductDetailsContainer />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Cart/>
      <WhatsappFAB />
      <Footer />
    </div>
  );
}

export default App;