import { Col, Container, Row } from "react-bootstrap";

export default function Baking(){
    return(
        <Container className="baking">
            <Row>
                <Col>
                    <h2>Baked fresh daily by bakers with passion.</h2>
                </Col>
                <Col>
                    <button>Learn More</button>
                </Col>
            </Row>
        </Container>
    )
}