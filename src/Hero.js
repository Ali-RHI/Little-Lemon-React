import menuImg from "./content/restauranfood.jpg";
import "./Hero.css";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <section className="hero-section">
      <div>
        <h1 id="mainHeader">Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="reserveButton"><Link to="/booking" >Reserve a table</Link></button>
      </div>
      <div className="heroImgPar"><img src={menuImg} className="heroImg" /></div>
    </section>
  );
}
