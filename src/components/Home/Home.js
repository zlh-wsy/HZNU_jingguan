import React from 'react';
import {Carousel, Card} from 'react-bootstrap';
import img from '../../img/lunbo1.jpg';
import imgMore from '../../img/more.png';
import "./Home.css";

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
                
                <div className="content" style={{marginTop: 20}}>
                    <ul className="L">
                        <li className="news_detail">
                            <img src={img} alt="" className="news_pic"></img>
                            <div className="news_subTitle">Sample newsSample newsSample news</div>
                            <div className="news_time">2020-5-19</div>
                        </li>

                        <li className="news_detail">
                            <img src={img} alt="" className="news_pic"></img>
                            <div className="news_subTitle">Sample newsSample newsSample news</div>
                            <div className="news_time">2020-5-19</div>
                        </li>

                        <li className="news_detail">
                            <img src={img} alt="" className="news_pic"></img>
                            <div className="news_subTitle">Sample newsSample newsSample news</div>
                            <div className="news_time">2020-5-19</div>
                        </li>
                    </ul>
                    <ul className="R">
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                        <li>Sample newsSample newsSample news</li>
                    </ul>
                </div>
            </div>

            <div className="achievments">
                <div className="content">
                <div className="achievments_block">
                    <div className="ach_section">教学<hr/></div>
                    <div className="extra">
                        <div className="extra_En L">Teaching</div>
                        <div className="R">
                            <img alt="" src={imgMore}></img>
                        </div>
                    </div>
                    <Card className="custom_card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={img} style={{height: 262}}/>
                        <Card.Body style={{padding: "20px 20px 50px 20px"}}>
                            <Card.Title>Sample newsSample newsSample news</Card.Title>
                            <Card.Text>
                            2020-5-19<br/>
                            Sample newsSample newsSample newsSample newsSample newsSample newsSample newsSample news
                            Sample newsSample newsSample news
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="achievments_block" style={{marginLeft: '40px'}}>
                    <div className="ach_section">科研<hr/></div>
                    <div className="extra">
                        <div className="extra_En L">Scientific</div>
                        <div className="R">
                            <img alt="" src={imgMore}></img>
                        </div>
                    </div>
                    <Card className="custom_card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={img} style={{height: 262}}/>
                        <Card.Body style={{padding: "20px 20px 50px 20px"}}>
                            <Card.Title>Sample newsSample newsSample news</Card.Title>
                            <Card.Text>
                            2020-5-19<br/>
                            Sample newsSample newsSample newsSample newsSample newsSample newsSample newsSample news
                            Sample newsSample newsSample news
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="achievments_block" style={{marginLeft: '40px'}}>
                    <div className="ach_section">志愿服务<hr/></div>
                    <div className="extra">
                        <div className="extra_En L">Volunteering</div>
                        <div className="R">
                            <img alt="" src={imgMore}></img>
                        </div>
                    </div>
                    <Card className="custom_card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={img} style={{height: 262}}/>
                        <Card.Body style={{padding: "20px 20px 50px 20px"}}>
                            <Card.Title>Sample newsSample newsSample news</Card.Title>
                            <Card.Text>
                            2020-5-19<br/>
                            Sample newsSample newsSample newsSample newsSample newsSample newsSample newsSample news
                            Sample newsSample newsSample news
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home;