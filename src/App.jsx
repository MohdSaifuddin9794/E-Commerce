import "./App.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/commons/header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-icons";
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContatcUs from './pages/ContactUs'

function App() {
  return (
    <>
        <Header></Header>
      <BrowserRouter>

        <Routes>
          <Route exact={true} path="/" element={<Home />}></Route>
          <Route exact={true} path="/home" element={<Home />}></Route>
          <Route exact={true} path="/about" element={<AboutUs />}></Route>
          <Route exact={true} path="/contact" element={<ContatcUs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
