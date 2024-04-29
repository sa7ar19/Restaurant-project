import Card from 'react-bootstrap/Card';
import img1 from '../../../assets/front-view-yummy-waffle-cakes-dark-background.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const imgList = [img1, img1, img1]
export default function Explore(){
    return(
        <section className="explore container" id='explore'>
            <h2>Explore Our Foodes</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur incidunt cupiditate voluptatem asperiores quos quia illum inventore aliquam minus sapiente exercitationem, ipsam nisi debitis modi numquam quo mollitia! Dicta, quibusdam!</p>
            <div className="cards-wrapper container">
            <Row xs={1} md={2} className="g-4 container mt-3">
                {
                    imgList.map((img, idx)=>(
                                <Col key={idx} xs={12} sm={6} md={4}>
                            <Card style={{ width: '100%' }} className="text-start">
                                <Card.Img variant="top" src={img1} />
                                <Card.Body variant="">
                                    <Card.Title>Rainbow Vegetable Sandqwich</Card.Title>
                                    <small className="text-muted">Last updated 3 mins ago</small>

                                    <Card.Text>
                                        <h3>$9.20 <span className='text-muted'>$10.50</span></h3>
                                    </Card.Text>
                                    <button>Go somewhere</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
            </div>
        </section>
    )
}