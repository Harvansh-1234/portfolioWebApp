import React from 'react';
import gsap from "gsap";
import logo from '../logo.svg';
import logoBW from '../logoBW.svg';
import '../CSS/Navbar.css'


function NavBar() {


    React.useEffect(() => {
        const open = document.querySelector('.container');
        const close = document.querySelector('.close');
        var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
        open.addEventListener('click', () => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('nav', { right: 0 })
                    .to('nav', { height: '100vh' }, '-=.1')
                    .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .2 }, '-=.8')
                    .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
                    .to('.navlogoBW', { opacity: 1 }, "-=1")
                    .to('nav h2', { opacity: 1 }, '-=1');
            }
        });
    
        close.addEventListener('click', () => {
            tl.reverse();
        });
    });
    

    return (
        <div style={{overflow:"hidden"}}>
            <div className='NavHead'>
            <div class="container">
                <div class="bars"></div>
            </div>
                <div className='navlogo'>
                <img src={logo} alt="" />

                </div>
            </div>

            <nav style={{overflow:"hidden"}}>
            <div className='navlogoBW'>
                <img src={logoBW} alt="" />

                </div>
                <div class="close">
                    <div></div>
                </div>
                <ul>
                    <li><a href="/">Home()</a></li>
                    <li><a href="/">About()</a></li>
                    <li><a href="/">Qualifications()</a></li>
                    <li><a href="/">Skills()</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;
