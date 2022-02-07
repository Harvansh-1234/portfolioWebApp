import React from 'react';
import logo1 from '../logo1.svg';
import '../CSS/Home.css';
// React.useEffect(() => {
// document.getElementById('animateLogo')
// });

function Home() {
    return (
        <div className='home-section'>
            {/* <div>
                <div className='homeSection'>
                    <h1 className='name'>Harvansh Rathore</h1>
                </div>
            </div> */}
            <div class="main-hero-text">
                <div class="content">
                    <div class="text-loading-mask">
                        <div class="text-loading-overlay"></div>
                        <h1  class="main-hero-title .h1">Harvansh Rathore</h1>
                    </div>
                    <div>
                        <div class="text-loading-mask">
                            <div style={{transitionDelay:"0.1s"}} class="text-loading-overlay"></div>
                            <h3 class="main-hero-subtitle h5">Interactive Front-end Developer</h3>
                        </div>
                    </div>
                    <div>
                        <div style={{width:"175px"}} class="text-loading-mask">
                            <div style={{transitionDelay:"0.1s"}} class="text-loading-overlay"></div><a href="/"
                                class="the-button call-to-button no-smoothstate open-contact"><span
                                    class="button-text">About Me</span>
                                <div class="button-mask"></div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ width: "200px", height: "100px" }}>
                <object data={logo1} type="image/svg+xml">svg-animation</object>
            </div>
        </div>
    );
}

export default Home;
