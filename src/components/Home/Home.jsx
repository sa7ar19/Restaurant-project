import Hero from "./Hero";
import './Home.css'
import Numbers from "./sections/Numbers";
import Pride from "./sections/Pride";
import Collection from "./sections/Collection";
import Sweets from "./sections/Sweets";
import Explore from "./sections/Explore";
import TestimonialCarousel from "./sections/TestimonialCarousel";
import img1 from '../../assets/bohemian-man-with-his-arms-crossed.jpg'
import img2 from '../../assets/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually.jpg'
import img3 from '../../assets/senior-man-white-sweater-eyeglasses.jpg'
import FAQ from "./sections/FAQ";
import Baking from "./sections/baking";
// import Offers from "./sections/Offers";
import Offer from "./sections/Offer";
import Footer from "./sections/Footer";
export default function Home(){
    const testimonials = [
        {
          quote: "I love this product! It's made my life so much easier.",
          author: "John Doe",
          imgSrc: img1
        },
        {
            quote: "Excellent customer service and a fantastic product!",
            author: "Jane Smith",
            imgSrc: img2
        },
        {
            quote: "I can't imagine using anything else. Highly recommended!",
            author: "Alice Johnson",
            imgSrc: img3
        }
      ];
    

    return(
        <>
            <Hero />
            <Numbers />
            <Pride />
            <Collection />
            <Sweets />
            <Explore />
            <div className=" testimonial-wrapper">
                <h2>Testimonials</h2>
                <TestimonialCarousel testimonials={testimonials} />
            </div>
            <FAQ />
            <Baking />
            <Offer />
            <Footer />
        </>
    )
}
