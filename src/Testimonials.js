import "./Testimonials.css"
import image1 from "./content/images.jpeg"

export default function Testimonials(){
  return (
    <section class="testimonials-section">
      <p>Testimonials</p>
      <div>
        <article class="testimonial">
            <p class="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  class="testimonial-img"/>
                <p class="testimonial-name">Name</p>
            </div>
            <p class="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
        <article class="testimonial">
            <p class="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  class="testimonial-img"/>
                <p class="testimonial-name">Name</p>
            </div>
            <p class="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
        <article class="testimonial">
            <p class="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  class="testimonial-img"/>
                <p class="testimonial-name">Name</p>
            </div>
            <p class="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
        <article class="testimonial">
            <p class="testimonial-rating">Rating</p>
            <div>
                <img src={image1}  class="testimonial-img"/>
                <p class="testimonial-name">Name</p>
            </div>
            <p class="testimonial-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </article>
      </div>
    </section>
  );
}
