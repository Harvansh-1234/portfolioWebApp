import React from 'react'
import '../CSS/Footer.scss'

function Footer() {
    return (
        <div>
            <footer>
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
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-telegram"></i></a>
                    </section>
                    <section>
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Order</a>
                        <a href="#">Retail</a>
                        <a href="#">Member</a>
                        <a href="#">Contact Us</a>
                    </section>
                </div>
            </footer>
        </div>
    )
}

export default Footer