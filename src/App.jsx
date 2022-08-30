import "./App.scss";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <div>
      <NavBar/>
      <div className="h-screen bg-white"></div>
      <Footer/>
    </div>
  );
}

export default App;
