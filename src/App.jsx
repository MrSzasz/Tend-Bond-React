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
import FireBaseDash from "./components/FireBaseDash/FireBaseDash";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import FireBaseDashAdd from "./components/FireBaseDashAdd/FireBaseDashAdd";
import FireBaseDashEdit from "./components/FireBaseDashEdit/FireBaseDashEdit";

function App() {
  const showCart = () => {
    $("#blurCart").fadeToggle();
    $("#modalCartContainer").slideToggle();
  };

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainContainer />} />
        <Route path="/products/:cat" element={<ProductsContainer />} />
        <Route
          path="/products/detalle/:id"
          element={<ProductDetailsContainer />}
        />
        <Route path="/*" element={<Navigate to="/" replace />} />
        <Route element={<ProtectedRoute user={' '} />}>
          <Route path="/fbdash" element={<FireBaseDash />} />
          <Route path="/fbdash/add" element={<FireBaseDashAdd />} />
          <Route path="/fbdash/edit/:prodId" element={<FireBaseDashEdit />} />
        </Route>
      </Routes>
      <Cart showCart={showCart} />
      <WhatsappFAB />
      <Footer />
    </div>
  );
}

export default App;
