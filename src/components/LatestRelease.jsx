import { Component } from "react";
import { Container, Row, Carousel, Col } from "react-bootstrap";
import books from '../data/fantasy.json'

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <Row className='justify-content-center'>
                    <Col className='mb-5' xs={12} md={6}>
                        <h2 className='mb-4 text-center'>Latest Release</h2>
                        <Carousel > {
                            books.slice(5, 10).map((book, i)=> (
                            <Carousel.Item key={book.asin}>
                                <img
                                className="d-block mx-auto"
                                src={book.img}
                                alt="First slide"
                                style={{height: 500}}
                                />
                                <Carousel.Caption>
                                {/* <h3>{book.title}</h3> */}
                                {/* <p>{book.category}</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            ))
                        }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default LatestRelease