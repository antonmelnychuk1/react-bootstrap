import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'


export default class Blog extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="9">
                        <Card className="d-flex flex-row m-4 border-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRLYpoveDNj3290nEWBjpHr3E2stHgwaiq4a9hExqxAbQ946C-aPtjhxD7Poyej2fIz0&usqp=CAU" 
                                alt="JS"
                                width={150} 
                                height={150}
                                className="mr-3" 
                             />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. 
                                </p>
                            </Card.Body>
                        </Card>

                        <Card className="d-flex flex-row m-4 border-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRLYpoveDNj3290nEWBjpHr3E2stHgwaiq4a9hExqxAbQ946C-aPtjhxD7Poyej2fIz0&usqp=CAU" 
                                alt="JS"
                                width={150} 
                                height={150}
                                className="mr-3" 
                             />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. 
                                </p>
                            </Card.Body>
                        </Card>

                        <Card className="d-flex flex-row m-4 border-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRLYpoveDNj3290nEWBjpHr3E2stHgwaiq4a9hExqxAbQ946C-aPtjhxD7Poyej2fIz0&usqp=CAU" 
                                alt="JS"
                                width={150} 
                                height={150}
                                className="mr-3" 
                             />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. 
                                </p>
                            </Card.Body>
                        </Card>

                        <Card className="d-flex flex-row m-4 border-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRLYpoveDNj3290nEWBjpHr3E2stHgwaiq4a9hExqxAbQ946C-aPtjhxD7Poyej2fIz0&usqp=CAU" 
                                alt="JS"
                                width={150} 
                                height={150}
                                className="mr-3" 
                             />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. 
                                </p>
                            </Card.Body>
                        </Card>

                        <Card className="d-flex flex-row m-4 border-0">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPRLYpoveDNj3290nEWBjpHr3E2stHgwaiq4a9hExqxAbQ946C-aPtjhxD7Poyej2fIz0&usqp=CAU" 
                                alt="JS"
                                width={150} 
                                height={150}
                                className="mr-3" 
                             />
                            <Card.Body>
                                <h5>Blog post</h5>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. 
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3">
                        <h5 className="text-center mt-4">Categories</h5>
                        <Card>
                            <ListGroup variant="flush">
                                <ListGroup.Item>Html/Css</ListGroup.Item>
                                <ListGroup.Item>JavaScript</ListGroup.Item>
                                <ListGroup.Item>Python</ListGroup.Item>
                                <ListGroup.Item>Java</ListGroup.Item>
                                <ListGroup.Item>C++</ListGroup.Item>
                            </ListGroup>
                        </Card>

                        <Card className="mt-3">
                            <Card.Body>
                                <Card.Title>Site widget</Card.Title>
                                <Card.Text>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
