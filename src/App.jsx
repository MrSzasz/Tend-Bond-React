import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import WhatsappFAB from "./components/WhatsappFAB/WhatsappFAB";

function App() {

  return (
    <div>
      <NavBar/>
      <div className="h-screen bg-white"></div>
      <WhatsappFAB/>
      <Footer/>
    </div>
  );
}

export default App;
