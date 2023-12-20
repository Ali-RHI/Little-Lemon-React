import menuImg from "./content/restauranfood.jpg";
import "./Footer.css";
import navImg from "./content/Logo.svg"

export default function Hero() {
  return (
    <footer>
      <img src={navImg}/>
      <section class="footer-nav">
        <h3>Navigation</h3>
        <p>Home</p>
        <p>Menu</p>
        <p>Reservation</p>
        <p>About</p>
      </section>
      <section class="footer-contactus">
        <h3>Contact us</h3>
        <p>Address</p>
        <p>Phone Number</p>
        <p>Email</p>
      </section>
      <section class="footer-social">
        <h3>Social media</h3>
        <p>Telegram</p>
        <p>Instagram</p>
        <p>Whatsapp</p>
      </section>
    </footer>
  );
}
