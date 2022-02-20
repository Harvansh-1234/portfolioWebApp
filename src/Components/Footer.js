import React from 'react'
import '../CSS/Footer.scss'

function Footer() {
    return (
        <div>
            <footer>
                <div style={{ width: "75%",margin:"0 auto" }}>
                    <div class="top_header">
                        <section>
                            <span><i class="fa fa-map-marker"></i></span>
                            <span>MR4 Road New Adarsh Colony, Jabalpur(M.P), India, 482002</span>
                        </section>
                        <section>
                            <span><i class="fa fa-phone"></i></span>
                            <span>+91 8959180147</span>
                        </section>
                        <section>
                            <span><i class="fa fa-envelope"></i></span>
                            <span>harvanshrathore20@gmail.com</span>
                        </section>
                    </div>
                    <span class="border-shape"></span>
                    <div class="bottom_content">
                        <section>
                            <a href="https://github.com/Harvansh-1234"><i class="fa fa-github"></i></a>
                            <a href="https://www.instagram.com/harvansh_rathore25/"><i class="fa fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/harvansh-s-rathore-225b1620a/"><i class="fa fa-linkedin"></i></a>
                        </section>
                        <section>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#timeline">Qualifications</a>
                            {/* <a href="#projects">Projects</a> */}
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact Us</a>
                        </section>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer