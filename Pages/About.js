import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'

export default class About extends Component {
    render() {
        return (
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="mt-3">
                                <Tab.Pane eventKey="first"> 
                                    <img 
                                        src="https://samacharcentral.com/wp-content/uploads/2021/06/Website-Design-.jpeg"
                                        alt="img"
                                        width="100%"
                                    />
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a
                                        type specimen book. It has survived not 
                                        only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second"> 
                                    <img 
                                        src="https://www.techrepublic.com/a/hub/i/r/2018/03/02/aacee157-8c76-433e-90b8-07d14dc96c1f/resize/1200x900/15af6fa88449542bcb349054049d60c7/microsoft-teams.png"
                                        alt="img"
                                        width="100%"
                                    />
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a
                                        type specimen book. It has survived not 
                                        only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </p>
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a
                                        type specimen book. It has survived not 
                                        only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third"> 
                                    <img 
                                        src="https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/getty_1075599562_hpy86b.jpg"
                                        alt="img"
                                        width="100%"
                                    />
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a
                                        type specimen book. It has survived not 
                                        only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth"> 
                                    <img 
                                        src="https://miro.medium.com/max/2000/1*ItGd7Itb99Cr6rE4qVD8wg.png"
                                        alt="img"
                                        width="100%"
                                    />
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a
                                        type specimen book. It has survived not 
                                        only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth"> 
                                    <img 
                                        src="https://miro.medium.com/max/1200/1*4cFhtuq6zRDqJ6p4s2pQ6g.jpeg"
                                        alt="img"
                                        width="100%"
                                    />
                                    <p>Lorem Ipsum is simply dummy text of the printing
                                        and typesetting industry. Lorem Ipsum has been
                                        the industry's standard dummy text ever since
                                        the 1500s, when an unknown printer took a
                                        galley of type and scrambled it to make a
                                        type specimen book. It has survived not 
                                        only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially
                                        unchanged. It was popularised in the 1960s
                                        with the release of Letraset sheets containing
                                        Lorem Ipsum passages, and more recently with
                                        desktop publishing software like Aldus PageMaker
                                        including versions of Lorem Ipsum.
                                    </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}
