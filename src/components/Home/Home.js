import React from 'react';
import {Carousel, Card} from 'react-bootstrap';
import img from '../../img/lunbo1.jpg';
import imgMore from '../../img/more.png';
import img_jx from '../../img/jx2.jpg';
import img_ky from '../../img/jx.jpg'
import img_zyfw from '../../img/zyfw.jpg'
import img_news from '../../img/zyfw.jpg'
import img_news2 from '../../img/news2.jpg'
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
                            <img src={img_news} alt="" className="news_pic"></img>
                            <div className="news_subTitle"><br/>经管学院召开期中教学在线座谈会</div>
                            <div className="news_time"><br/>2020-04-16</div>
                        </li>

                        <li className="news_detail">
                            <img src={img_news2} alt="" className="news_pic"></img><br/>
                            <div className="news_subTitle"><br/>讲最好的故事，做优秀的简历——经管学院学工团队推出“云思政”</div>
                            <div className="news_time">2020-03-28</div>
                        </li>

                        <li className="news_detail">
                            <img src={img_news} alt="" className="news_pic"></img>
                            <div className="news_subTitle"><br/>关于拟确定赵珂尔等42位同志为入党积极分子,李雨婷等37位同志为...</div>
                            <div className="news_time">2020-03-26</div>
                        </li>
                    </ul>
                    <ul className="R">
                        <li>经管学院召开期中教学在线座谈会</li>
                        <li>讲最好的故事，做优秀的简历——经管学院学工团...</li>
                        <li>关于拟确定赵珂尔等42位同志为入党积极分子,李...</li>
                        <li>我院职业生涯教育登上学习强国全国平台</li>
                        <li>转自中国教育新闻网“杭州师范大学经管学院：在亲...</li>
                        <li>经管学院学生党员登上“学习强国”全国平台</li>
                        <li>经管学院召开湖北师生“云端座谈会”</li>
                        <li>经管学院学工团队召开新学期“云端会议”</li>
                        <li>转发：关于做好2019年度杭州师范大学恒逸邱建林...</li>
                        <li>关于做好2020年学生寒假期间公寓管理工作的通知</li>
                        <li>关于做好杭州师范大学2020年“星光计划”学生创新...</li>
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
                    <Card.Img variant="top" src={img_jx} style={{height: 262}}/>
                        <Card.Body style={{padding: "20px 20px 50px 20px"}}>
                            <Card.Title>我院召开全体学生大会精心部署迎...</Card.Title>
                            <Card.Text styleName="max-height: 110px; overflow: hidden;">
                            2018-10-30<br/>
                            <br/>
                            10月25日下午，我院全体学生大会在学术交流中心1500座隆重举行，学院全体领导班子成员出席大会，1100多名本科生参加。
此次大会是学院搬迁至新校区以来的第一次全体学生大...
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
                    <Card.Img variant="top" src={img_ky} style={{height: 262}}/>
                        <Card.Body style={{padding: "20px 20px 50px 20px"}}>
                            <Card.Title>经管学院举办金融硕士学科建设与...</Card.Title>
                            <Card.Text>
                            2019-12-18<br/><br/>
                            12月11日下午，经管学院金融硕士学科建设研讨暨导师培训会。特邀合肥工业大学金融硕士（MF）教育中心专家张根文主任做专题报告。王明琳院长、方湖柳副院长以及学院金融硕...
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
                    <Card.Img variant="top" src={img_zyfw} style={{height: 262}}/>
                        <Card.Body style={{padding: "20px 20px 50px 20px"}}>
                            <Card.Title>关于组织开展杭州师范大学2017年...</Card.Title>
                            <Card.Text>
                            2016-12-13<br/><br/>
                            各班级：为全面贯彻党的十八届六中全会精神，深入学习贯彻习近平总书记系列重要讲话精神，引领广大青年学生树立和践行社会主义核心价值观，紧紧围绕协调推进“四个全面”...
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