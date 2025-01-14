import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/commons/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-icons";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContatcUs from './pages/ContactUs'
import Footer from "./components/commons/footer/Footer";
import Shop from "./pages/Shop";
import Page_404 from "./pages/Page_404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>

        <Routes>
          <Route exact={true} path="/" element={<Home />}></Route>
          <Route exact={true} path="/home" element={<Home />}></Route>
          <Route exact={true} path="/about" element={<AboutUs />}></Route>
          <Route exact={true} path="/contact" element={<ContatcUs />}></Route>
          <Route exact={true} path="/shop" element={<Shop />}></Route>
          <Route exact={true} path="/*" element={<Page_404 />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
