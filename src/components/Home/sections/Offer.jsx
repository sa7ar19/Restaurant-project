import { Container } from "react-bootstrap";

export default function Offer(){
    return(
        <Container className="offers">
            <h2>Hurry Up! Subscribe our newsletter<br />and get 25% off</h2>
            <p>Limited time offer for this month No credit card required.
            </p>
            <form>
                <div>
                    <input type="email" placeholder="Enter your Email, please!" />
                    <button type="submit">Subscribe</button>
                </div>
            </form>
        </Container>
    )
}