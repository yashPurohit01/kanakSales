/* import { Carousel } from 'bootstrap'; */
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import Image from 'next/image';


function ControlledCarousel() {

    return (

        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
            <div >
                <img /*  height="600" width="2000" */ src="/images/banner-1.jpg" alt="image1" />
               {/*  <p >Image 1</p> */}

            </div>

            <div style={{margin:0}}>
                <img  /*  height="600" width="2000" */src="/images/banner-1.jpg" alt="image4" />
                <p className="legend">Image 4</p>

            </div >
            <div  style={{margin:0}}>
                <img /*  height="600" width="2000" */ src="/images/banner-1.jpg" alt="image5" />
                <p className="legend">Image 5</p>

            </div>
        </Carousel>
    );
}



export default ControlledCarousel;