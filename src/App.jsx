import $ from "jquery";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import WhatsappFAB from "./components/WhatsappFAB/WhatsappFAB";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductsContainer from "./components/ProductsContainer/ProductsContainer";
import ProductDetailsContainer from "./components/ProductDetailsContainer/ProductDetailsContainer";
import Cart from "./components/Cart/Cart";
import { useSelector } from "react-redux";

function App() {
  const showCart = () => {
    $('#blurCart').fadeToggle();
    $("#modalCartContainer").slideToggle();
  };

  const cart = useSelector(state => state.cartSlice)
  
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/products/:cat" element={<ProductsContainer />} />
        <Route path="/products/detalle/:id" element={<ProductDetailsContainer />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      <Cart showCart={showCart}/>
      <WhatsappFAB />
      <Footer />
    </div>
  );
}

export default App;