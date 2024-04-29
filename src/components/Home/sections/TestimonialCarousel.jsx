import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './testimonial.css'
const TestimonialCarousel = ({ testimonials }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} id='review'>
      {testimonials.map((testimonial, idx) => (
        <Carousel.Item key={idx}>
          <div className="testimonial">
            <img src={testimonial.imgSrc} width={100} height={100} alt={testimonial.author} />
            <p className="quote">{testimonial.quote}</p>
            <p className="author">{testimonial.author}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TestimonialCarousel;