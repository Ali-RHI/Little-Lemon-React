import ord1Img from "./content/greek salad.jpg";
import ord2Img from "./content/bruchetta.svg";
import ord3Img from "./content/lemon dessert.jpg";
import "./Highlights.css";

export default function Highlights() {
  return (
    <section className="highlights">
      <div className="high-header">
        <p>This weeks specials!</p>
        <button>Online menu</button>
      </div>
      <div className="high-orders">
        <article className="high-order">
          <img src={ord1Img} className="high-order-img" />
          <div className="high-order-box">
            <h3>Greek salad</h3>
            <h5>10.99$</h5>
          </div>
          <p className="high-order-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="high-order-price">order delivery 1$</p>
        </article>
        <article className="high-order">
          <img src={ord2Img} className="high-order-img" />
          <div className="high-order-box">
            <h3>Bruschetta</h3>
            <h5>12.99$</h5>
          </div>
          <p className="high-order-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="high-order-price">order delivery 1$</p>
        </article>
        <article className="high-order">
          <img src={ord3Img} className="high-order-img" />
          <div className="high-order-box">
            <h3>lemon dessert</h3>
            <h5>9.99$</h5>
          </div>
          <p className="high-order-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="high-order-price">order delivery 1$</p>
        </article>
      </div>
    </section>
  );
}
