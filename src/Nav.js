import logo from "./content/Logo.svg";
import "./Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul class="nav">
        <li>
          <img src={logo} />
        </li>
        <li>
          <ul class="menu">
            <Link to="/" className="listItem">Login</Link>
            <Link to="/" className="listItem">About</Link>
            <Link to="/booking" className="listItem">Reservation</Link>
            <Link to="/" className="listItem">Menu</Link>
            <Link to="/" className="listItem">Home</Link>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
