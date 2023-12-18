import Header from "./components/Header";
import Footer from "./components/Footer";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Catalogo from "./pages/Productos";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;