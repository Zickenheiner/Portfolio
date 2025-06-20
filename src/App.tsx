import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
