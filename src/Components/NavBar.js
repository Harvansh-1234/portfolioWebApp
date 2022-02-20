import React from 'react';
import gsap from "gsap";
import logo from '../logo.svg';
import logoBW from '../logoBW.svg';
import '../CSS/Navbar.css'


function NavBar() {


    React.useEffect(() => {
        const open = document.querySelector('.container');
        const badi = document.querySelector('.divbody');
        const close = document.querySelector('.close');
        const openContact = document.querySelector('#contact');
        var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
        open.addEventListener('click', () => {
            if (tl.reversed()) {
                tl.play();
            } else {
                tl.to('nav', { right: 0 })
                    .to('nav', { height: '100vh' }, '-=.1')
                    
                    .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
                    .to('.navlogoBW', { opacity: 1 }, "-=1")
                    .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .1 }, '-=.3')
                    .to('nav h2', { opacity: 1 }, '-=1');
            }
            setTimeout(() => {
                badi.classList.add('navOpen');
            }, 1500);
        });

        close.addEventListener('click', () => {

            tl.reverse();
            badi.classList.remove('navOpen');

        });
    });


    return (
        <div style={{ overflow: "hidden" }}>
            <div className='NavHead'>
                <div class="container">
                    <div class="bars"></div>
                </div>
                <div className='navlogo'>
                    <img src={logo} alt="" />

                </div>
            </div>

            <nav style={{ overflow: "hidden" }}>
                <div className='navlogoBW'>
                    <img src={logoBW} alt="" />

                </div>
                <div class="close">
                    <div></div>

                    <ul>
                        <li><a href="#home">Home()</a></li>
                        <li><a href="#about">About()</a></li>
                        <li><a href="#timeline">Qualifications()</a></li>
                        <li><a href="#skills">Skills()</a></li>
                        {/* <li><a href="#projects">Projects()</a></li> */}
                        <li><a href="#contact">ContactUs()</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
