import React from "react";
import "../CSS/Timeline.scss";
import cal from '../cal.png';


export default function Timeline() {

    return (
        <>
            <div className='AboutMain'>
                <div className='about-side'>
                    <div className='aboutSide'></div>
                    <h3>Qualifications</h3>
                </div>
            </div>
            {/* <div ><h3 style={{position:"relative",left:"50%",transform:"translate(-50%)"}}>Education</h3></div> */}
            <div class="containe">
                <div class="rightbox">
                    <div class="rb-container">
                        <ul class="rb">
                            <li class="rb-item" ng-repeat="itembx">
                                <div class="timestamp">
                                <h4>B.Tech in Computer Science and Engineering</h4>
                                </div>
                                <div class="item-title"><h6>University Institute of Technology, RGPV Bhopal</h6></div>
                                <div class="item-title1"><img src={cal} alt="" width={'20px'} /> 2020 - 2024</div>

                            </li>
                            <li class="rb-item" ng-repeat="itembx">
                                <div class="timestamp">
                                <h4>Higher Secondary School</h4>
                                </div>
                                <div class="item-title"><h5>University Institute of Technology, RGPV Bhopal</h5></div>
                                <div class="item-title1"><img src={cal} alt="" width={'20px'} /> 2020 - 2024</div>

                            </li>

                            <li class="rb-item" ng-repeat="itembx">
                                <div class="timestamp">
                                <h4>Secondary School Certificate</h4>
                                </div>
                                <div class="item-title"><h5>University Institute of Technology, RGPV Bhopal</h5></div>
                                <div class="item-title1"><img src={cal} alt="" width={'20px'} /> 2020 - 2024</div>

                            </li>

                        </ul>

                    </div>
                </div>
            </div>

        </>
    )
}
