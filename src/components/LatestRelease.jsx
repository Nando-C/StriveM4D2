import { Component } from "react";
import { Container, Row, Carousel, Col } from "react-bootstrap";
import books from '../data/fantasy.json'

class LatestRelease extends Component {
    render() {
        return (
            <Container>
                <Row className='justify-content-center h-50 my-4'>
                    <Col className='mb-5 h-50' xs={12} md={6}>
                        <h2>Latest Release</h2>
                        <Carousel> {
                            books.map((book, i)=> (
                            <Carousel.Item key={book.asin}>
                                <img
                                className="d-block w-100 h-50"
                                src={book.img}
                                alt="First slide"
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