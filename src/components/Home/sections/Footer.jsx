import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaFacebookF, FaSquareXTwitter, FaYoutube, FaViber,FaLinkedin, FaSquareInstagram } from "react-icons/fa6";

export default function Footer(){

    return(
        <footer className="footer">
            <Navbar expand="lg">
                <Container>                  
                    <Nav className="m-auto nav">
                        <div></div>
                        <Nav.Link  className="nav-color" href="#register">Register</Nav.Link>
                        <Nav.Link href="#forum">Forum</Nav.Link>
                        <Nav.Link href="#affiliate">Affiliate</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>                   
                </Container>
            </Navbar>
            <div className='icons'>
                    <a href='facebook.com'><FaFacebookF/></a>
                    <a href='twitter.com'><FaSquareXTwitter /></a>
                    <a href='youtube.com'><FaYoutube /></a>
                    <a href='rotana.com'><FaViber  /></a>
                    <a href='linkedin.com'></a><FaLinkedin />
                    <a href='instagram.com'></a><FaSquareInstagram />
            </div>
            <p>&copy; 2024. Foods. All rights reserved</p>
        </footer>
    )
}