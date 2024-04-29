import food_1 from '../../../assets/3596.jpg'
import food_2 from '../../../assets/kebab-platter-with-lamb-chicken-lula-tikka-kebabs-grilled-vegetables-with-red-onion-salad.jpg'
import food_3 from '../../../assets/fried-meat-set-served-with-lemon-slices.jpg'
import food_4 from '../../../assets/tasty-serbian-food-arrangement-view.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export default function Collection(){
    return(
        <section className="collection-wraper">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>We make everything by hand with the best possible indredients.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione aliquam at, tempora sapiente doloremque repudiandae reprehenderit expedita sed beatae ad. Temporibus, necessitatibus veritatis corporis ipsam voluptatum autem aut asperiores reprehenderit.</p>
                        <p className="listt"><span>🔶</span> Etiam sed dolor ac diam volutpat.</p>
                        <p className="listt"><span>🔶</span> Etiam sed dolor ac diam volutpat.</p>
                        <p className="listt"><span>🔶</span> Etiam sed dolor ac diam volutpat.</p>
                        <button><a href="#">Learn More</a></button>
                    </div>
                    
                    <Container  className="col-md-6 collection">
                        <Row className="justify-content-md-center row">
                            <Col  className="col img1"><img src={food_1} alt="food"/></Col>
                            <Col className="col img2"><img src={food_2} width={"100%"}  alt="food"/></Col>
                        </Row>
                        <Row>
                            <Col className="col"><img src={food_3} width={"100%"}  alt="food"/></Col>
                            <Col className="col" xs={4}><img src={food_4} height={"90%"} width={"100%"}  alt="food"/></Col>
                        </Row>
                    </Container>
                
                </div>
            </div>
        </section>
    )
}