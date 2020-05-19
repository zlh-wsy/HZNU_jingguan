import React from 'react';
import {Carousel} from 'react-bootstrap';
import img from '../../img/lunbo1.jpg'

function Home(){
    return (
        <div>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img}
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img}
                alt="Third slide"
                />
            </Carousel.Item>
            </Carousel>

            <div className="news">
            <div className="content">
                <div style={{display: 'inline-block'}}>
                <div className="custom_h1">学院新闻</div>
                <div className="line_B"></div>
                </div>
                <div className="line"/>
                <div className="more">
                更多 >
                </div>
            </div>
            </div>
        </div>
    )
}

export default Home;