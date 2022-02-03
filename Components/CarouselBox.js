import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import forest1 from '../images/pexels-alexandr-podvalny-1006360.jpg'
import forest2 from '../images/pexels-kellie-churchman-1001682.jpg'
import forest3 from '../images/pexels-pok-rie-4416328.jpg'



export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel className="carousel">
                <Carousel.Item className="carousel-item">
                    <img 
                        className="d-block"
                        src={ forest1 }
                        alt="Forest1"
                        
                    />
                    <Carousel.Caption>
                        <h3>Forest image 1</h3>
                        <p>lorem ipsum dolor, sit amet consectetur adipicicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block"
                        src={ forest2 }
                        alt="Forest2"
                        
                    />
                    <Carousel.Caption>
                        <h3>Forest image 2</h3>
                        <p>lorem ipsum dolor, sit amet consectetur adipicicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img 
                        className="d-block"
                        src={ forest3 }
                        alt="Forest3"
                        
                    />
                    <Carousel.Caption>
                        <h3>Forest image 3</h3>
                        <p>lorem ipsum dolor, sit amet consectetur adipicicing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}
