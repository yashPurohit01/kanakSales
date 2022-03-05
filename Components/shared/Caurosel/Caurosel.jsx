/* import { Carousel } from 'bootstrap'; */
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import Image from 'next/image';


function ControlledCarousel() {

    return (

        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div >
                <img src="/images/banner01.png" alt="image1" />
               

            </div>

            <div style={{margin:0}}>
                <img src="/images/banner02.png" alt="image2" />
                

            </div >
            <div  style={{margin:0}}>
                <img src="/images/banner03.png" alt="image3" />
                

            </div>
        </Carousel>
    );
}



export default ControlledCarousel;