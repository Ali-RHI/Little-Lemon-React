import ord1Img from "./content/greek salad.jpg";
import ord2Img from "./content/bruchetta.svg";
import ord3Img from "./content/lemon dessert.jpg";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section class="highlights">
      <div class="high-header">
        <p>This weeks specials!</p>
        <button>Online menu</button>
      </div>
      <div class="high-orders">
        <article class="high-order">
          <img src={ord1Img} class="high-order-img" />
          <div>
            <h3>Greek salad</h3>
            <h5>10.99$</h5>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>order delivery 1$</p>
        </article>
        <article class="high-order">
          <img src={ord2Img} class="high-order-img" />
          <div>
            <h3>Bruschetta</h3>
            <h5>12.99$</h5>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>order delivery 1$</p>
        </article>
        <article class="high-order">
          <img src={ord3Img} class="high-order-img" />
          <div>
            <h3>lemon dessert</h3>
            <h5>9.99$</h5>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>order delivery 1$</p>
        </article>
      </div>
    </section>
  );
}
