import "./App.scss";
import Footer from "./components/Footer/Footer";
import MainContainer from "./components/MainContainer/MainContainer";
import NavBar from "./components/NavBar/NavBar";
import WhatsappFAB from "./components/WhatsappFAB/WhatsappFAB";

function App() {

  return (
    <div>
      <NavBar/>
      <MainContainer/>
      <WhatsappFAB/>
      <Footer/>
    </div>
  );
}

export default App;
