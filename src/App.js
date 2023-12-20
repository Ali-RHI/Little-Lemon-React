import "./App.css";
import Nav from "./Nav.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import BookingPage from "./BookingPage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <Main/>}/>
        <Route path="/booking" element={ <BookingPage/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
