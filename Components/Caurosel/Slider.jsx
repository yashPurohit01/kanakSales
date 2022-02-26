import React, { Component } from "react";
import Slider from "react-slick";
import Image from "next/image";

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3000,
            cssEase: "linear" ,
            nextArrow: false,
            prevArrow: false
            
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <img height="600" width="2000" src="/images/banner-1.jpg" alt="image1" />
                        {/* <p className="legend"></p> */}

                    </div>

                    <div>
                        <img height="600" width="2000" src="/images/banner-1.jpg" alt="image4" />
                      {/*   <p className="legend"></p>
 */}
                    </div>
                    <div>
                        <img height="600" width="2000" src="/images/banner-1.jpg" alt="image5" />
                      {/*   <p className="legend"></p> */}

                    </div>
                </Slider>
            </div>
        );
    }
}
