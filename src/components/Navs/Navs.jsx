import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navs.css'
import logo from '../../assets/7697984.jpg'
export default function Navs(){
    return(
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={logo} width={100} alt='logo' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#pride">About Us</Nav.Link>
                <Nav.Link href="#explore">Explore food</Nav.Link>
                <Nav.Link href="#review">Review</Nav.Link>
                <Nav.Link href="#faq">FAQ</Nav.Link>
            </Nav>
            <Nav className>
                <Nav.Link href="#deets" id='last-nav'>235648210</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
