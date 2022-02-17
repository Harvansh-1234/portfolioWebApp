import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react'
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "../CSS/Projects.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation
} from "swiper/core";
import one from './one.jpg';
SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function Projects() {
  return (
    <>
      <div className='AboutMain'>
        <div className='about-side'>
          <div className='aboutSide'></div>
          <h3>Projects</h3>
        </div>
      </div>
      <div className="cont sliderWrapper">
        <Swiper
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          pagination={{
            clickable: true
          }}
          className="mySwiper sliderWrapper"
        >
          <SwiperSlide>
            <div className="" style={{ width: "300px", height: "500px" }}>
              <div style={{position:"absolute",top:"50px",width:"250px",left:"50%",transform:"translate(-50%)"}}>
                <h4>Harvansh Singh Rathore</h4>
              </div>
              <img src={one} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "500px" }}>
            <div style={{position:"absolute",top:"50px",width:"250px",left:"50%",transform:"translate(-50%)"}}>
                <h4>Harvansh Singh Rathore</h4>
              </div>
              <img src={one} alt="" />
            </div>          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "500px" }}>
            <div style={{position:"absolute",top:"50px",width:"250px",left:"50%",transform:"translate(-50%)"}}>
                <h4>Harvansh Singh Rathore</h4>
              </div>
              <img src={one} alt="" />
            </div>          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "500px" }}>
            <div style={{position:"absolute",top:"50px",width:"250px",left:"50%",transform:"translate(-50%)"}}>
                <h4>Harvansh Singh Rathore</h4>
              </div>
              <img src={one} alt="" />
            </div>          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "500px" }}>
            <div style={{position:"absolute",top:"50px",width:"250px",left:"50%",transform:"translate(-50%)"}}>
                <h4>Harvansh Singh Rathore</h4>
              </div>
              <img src={one} alt="" />
            </div>          </SwiperSlide>
          <SwiperSlide>
            <div style={{ width: "300px", height: "500px" }}>
            <div style={{position:"absolute",top:"50px",width:"250px",left:"50%",transform:"translate(-50%)"}}>
                <h4>Harvansh Singh Rathore</h4>
              </div>
              <img src={one} alt="" />
            </div>          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}