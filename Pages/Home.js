import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, CardGroup, Card, Button } from 'react-bootstrap'




export default class Home extends Component {
    render() {
        return (
            <>
                <CarouselBox/>

                <Container className="container mw-100">
                    <h2 className="text-center m-4">Our team</h2>
                    <CardGroup>
                        <Card className="m-2 p-1 rounded border">
                            <Card.Img
                                className="rounded"
                                variant="top"
                                src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text className="fs-6">
                                    There are many variations of passages of Lorem Ipsum available.
                                </Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>

                        <Card className="m-3 p-1 rounded border">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text className="fs-6">
                                    There are many variations of passages of Lorem Ipsum available.
                                </Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>

                        <Card className="m-2 p-1 rounded border">
                            <Card.Img
                                variant="top"
                                src="https://images.pexels.com/photos/7096/people-woman-coffee-meeting.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            />
                            <Card.Body>
                                <Card.Title>Developers</Card.Title>
                                <Card.Text className="fs-6">
                                    There are many variations of passages of Lorem Ipsum available.
                                </Card.Text>
                                <Button variant="primary">About Team</Button>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Container>
            </>
        )
    }
}
