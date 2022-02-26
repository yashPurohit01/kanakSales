import React from 'react'
import { Carousel } from 'bootstrap'
import Image from 'next/image'

function Caurosel() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Image
                        className="d-block w-100"
                        src="banner-2.jpg"
                        alt="First slide"
                        
                        width="1000"
                        height="300"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Image
                        width="1000"
                        height="300"
                        className="d-block w-100"
                        src="banner-1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        width="1000"
                        height="300"
                        className="d-block w-100"
                        src="banner-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Caurosel