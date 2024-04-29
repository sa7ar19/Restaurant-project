import { Col, Container, Row } from "react-bootstrap";

export default function FAQ(){
    return(
        <Container className="faq" id="faq">
            <div className="title">
                <h2>Frequently Asked Questions</h2>
            </div>
            <Row>
                <Col>
                    <h3><span>~</span> Is Foodera Bread really baked fresh each day?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis libero temporibus nemo quasi suscipit, nobis accusantium, repudiandae dolor nihil atque eveniet culpa hic obcaecati voluptatem at explicabo a sit sequi.</p>
                </Col>
                <Col>
                    <h3><span>~</span> Do you bake breads containing animal fats or products?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque, impedit velit nemo eius blanditiis fugit. Totam reprehenderit quo dolore voluptas, laudantium facilis velit voluptates saepe quia, fugit omnis aliquid.</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3><span>~</span> Can i order your products online?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus eveniet veniam blanditiis iste, dolorem perspiciatis itaque tempora, ad beatae assumenda quas quaerat rerum vitae vel. Asperiores veritatis earum consectetur excepturi!</p>
                </Col>
                <Col>
                    <h3><span>~</span> When are you opening a shop near me?</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis sapiente dignissimos explicabo aut mollitia, earum fugit accusamus quidem vel facilis voluptate blanditiis perspiciatis soluta, consequuntur a ea unde odio. Repudiandae!</p>
                </Col>
            </Row>
        </Container>
    )
}