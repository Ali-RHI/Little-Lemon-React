import logo from "./content/Logo.svg";
import "./Nav.css";

export default function Nav() {
  return (
    <nav>
      <ul class="nav">
        <li>
          <img src={logo} />
        </li>
        <li>
          <ul class="menu">
            <li>Login</li>
            <li>About</li>
            <li>Reservation</li>
            <li>Menu</li>
            <li>Home</li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}
