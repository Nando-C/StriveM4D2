import { Component } from "react";
import { Container, Row } from "react-bootstrap";

class LatestRelease extends Component {
    render() {
        <Container>
            <Row className='justify-content-center mt-4'>
                <Col xs={12} md={6}>
                    <h2>Latest Release</h2>
                    <Carousel>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    }
}