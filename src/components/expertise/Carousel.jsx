import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// ---------- IMAGES ----------

import AWS from '../../assets/Logos/AWS.png';
import CSS from '../../assets/Logos/CSS.png';
import HTML from '../../assets/Logos/HTML.png';
import JS from '../../assets/Logos/JS.png';
// import Kali from '../../assets/Logos/Kali.png';
import Linux from '../../assets/Logos/Linux.png';
import MYSQL from '../../assets/Logos/MYSQL.png';
import Terraform from '../../assets/Logos/TERRAFORM.png';
import ReactLogo from '../../assets/Logos/React.png';

function Carousel(){
   return (
      <div className="carousel-container--hidden">
         <Swiper 
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={7}
            loop={true}
            autoplay={{
               delay: 2500,
               disableOnInteraction: false,
            }}
            >
            <SwiperSlide>
               <img src={AWS} alt='Amazon Web Services Logo' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={CSS} alt='Cascade Style Sheet Logo' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={HTML} alt='Hypertext Markup Language Logo' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={JS} alt='JavaScript Logo' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={MYSQL} alt='Structured Query Language Logo' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Linux} alt='Linux Logo' />
            </SwiperSlide>
            <SwiperSlide>
            <img src={Terraform} alt='Terraform Logo' />
            </SwiperSlide>
            <SwiperSlide>
               <img src={ReactLogo} alt='React Logo' />  
            </SwiperSlide>
         </Swiper>
      </div>
   );
};

export default Carousel;