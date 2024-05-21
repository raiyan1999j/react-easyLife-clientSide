const imgInfo=[
  {
    photoURL:"https://i.postimg.cc/Dw5mHRHN/pexels-cedric-fauntleroy-4266931.jpg",
    content:"Consultation services of doctors involve providing medical advice, diagnosis, and treatment plans through in-person visits, telemedicine, or other communication methods."
  },
  {
    photoURL:"https://i.postimg.cc/5t0jVnM2/jared-rice-Pibra-WHb4h8-unsplash.jpg",
    content:"Home repair services involve professional assistance with fixing, maintaining, and improving various aspects of a home, including plumbing, electrical work, and structural repairs."
  },
  {
      photoURL:"https://i.postimg.cc/0NBj2D8d/pexels-cottonbro-4101143.jpg",
      content:"Consultation services by lawyers provide legal advice, case evaluation, and guidance on legal matters through in-person meetings, phone calls, or online platforms."
  },
  {
    photoURL:"https://i.postimg.cc/Rhr0wmJW/revendo-Khn-Ri-IAgvs-I-unsplash.jpg",
    content:"Electronic item repairing services specialize in diagnosing and fixing issues in various electronic devices, such as smartphones, computers, and home appliances, to restore their functionality."
  },
  {
    photoURL:"https://i.postimg.cc/sxpgcL5w/aranxa-esteve-p-OXHU0-UEDcg-unsplash.jpg",
    content:"Event management services involve planning, organizing, and executing events such as weddings, conferences, and parties, ensuring everything runs smoothly from start to finish."
  },
  {
    photoURL:"https://i.postimg.cc/g2c2VNjH/scott-graham-5f-Nm-Wej4t-AA-unsplash.jpg",
    content:"Educational services provide instructional programs, tutoring, and resources to support learning and development across various subjects and educational levels."
  },
  {
    photoURL:"https://i.postimg.cc/d1CssfNw/anastase-maragos-Hyv-E5-Si-KMUs-unsplash.jpg",
    content:"Fitness and therapeutic services combine physical exercise programs with therapeutic treatments to enhance overall health, improve mobility, and promote recovery from injuries or chronic conditions."
  }
]

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay,Pagination } from 'swiper/modules';
import "../../App.css";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        {imgInfo.map((value,index)=>{
          return(
            <SwiperSlide key={index}>
            <div className='h-[500px] w-full relative mobileS:h-[200px]'>
            <div className='absolute h-full w-full top-0 left-0'>
              <img src={value.photoURL} alt="coverImg" className='h-full w-full object-cover rounded-lg' />
            </div>
            <div className='h-full w-full top-0 left-0 sliderFirstBg absolute'></div>
          </div>
          <div className='absolute w-[30%] top-[50%] left-[35%] sliderSecondBg mobileS:w-full mobileS:top-0 mobileS:left-0 mobileS:h-full'>
            <p className='text-white py-2 px-4 font-mono text-justify'>
            {value.content}
            </p>
          </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
