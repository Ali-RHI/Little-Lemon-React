import "./App.css";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
