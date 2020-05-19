import React from 'react';
import './subPage.css';
// 
function SubPage() {
    return (
    <div>
        <div className="bg_img"></div>

        <div className="section_inner c">
            <div className="sp_lf">
                <h1>学院简介</h1>
                <ul>
                    <li><a href="">学院简介</a></li>
                    <li><a href="">历史沿革</a></li>
                    <li><a href="">机构设置</a></li>
                    <li><a href="">历任领导</a></li>
                    <li><a href="">学术委员会</a></li>
                </ul>
            </div>
            <div className="sp_rig">
                <div className="sp_title">
                    <div className="title_left">
                        <h1>学院简介</h1>
                    </div>
                    <div className="title_right">
                        <i></i>
                        <span>
                            当前位置 : 
                        </span>
                        <a href="">首页</a> >
                        <a href="">学院概况</a> >
                        <a href="">学院简介</a>
                    </div>
                </div>

                {/* <div className="info_article">
                    <div className="article">
                        <div className="article_head">
                            <h1></h1>
                        </div>
                        <div className="article_content">
                            
                        </div>
                    </div>
                </div> */}
                 <div className="sp_list">
                     <ul>
                         <li>
                            <a href="">杭州师范大学文化创意学院2020年硕士研究生复试通知</a>
                            <div className="sp_list_time">2017-06-27</div>
                         </li>
                         <li>
                            <a href="">学院简介</a>
                            <div className="sp_list_time">2017-06-27</div>
                         </li>
                     </ul>
                 </div>

            </div>
            <div className="clear_float"> </div>
        </div>
    </div>
    );
}

export default SubPage;