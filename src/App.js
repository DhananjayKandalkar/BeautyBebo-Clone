import "./App.css";
import Navbar from "./components/NavbarC/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/FooterC/Footer"



function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-body">
        <Home />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
