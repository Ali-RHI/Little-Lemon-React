import "./Testimonials.css"
import image1 from "./content/images.jpeg"

export default function Testimonials(){
  return (
    <section className="testimonials-section">
      <p>Testimonials</p>
      <div>
        <article className="testimonial">
            <p className="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  className="testimonial-img"/>
                <p className="testimonial-name">Name</p>
            </div>
            <p className="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
        <article className="testimonial">
            <p className="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  className="testimonial-img"/>
                <p className="testimonial-name">Name</p>
            </div>
            <p className="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
        <article className="testimonial">
            <p className="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  className="testimonial-img"/>
                <p className="testimonial-name">Name</p>
            </div>
            <p className="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
        <article className="testimonial">
            <p className="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  className="testimonial-img"/>
                <p className="testimonial-name">Name</p>
            </div>
            <p className="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      </div>
    </section>
  );
}
