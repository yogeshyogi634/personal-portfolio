import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import Image from "next/image";
// import required modules
import { Autoplay } from "swiper/modules";

export default function SkillsSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000, // Time between slides in milliseconds
          disableOnInteraction: false, // Autoplay will not be disabled after user interactions (swipes)
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <h3>Javascript</h3>
          <Image alt="image" src="/icons/js.png" width={50} height={50}></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>ReactJS</h3>
          <Image
            alt="image"
            src="/icons/react.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>NextJS</h3>
          <Image
            alt="image"
            src="/icons/nextjs.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>HTML</h3>
          <Image
            alt="image"
            src="/icons/html.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>CSS</h3>
          <Image
            alt="image"
            src="/icons/css.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>Tailwind CSS</h3>
          <Image
            alt="image"
            src="/icons/tailwind.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>GitHub</h3>
          <Image
            alt="image"
            src="/icons/githubIcon.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>NodeJS</h3>
          <Image
            alt="image"
            src="/icons/nodejs.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
        <SwiperSlide>
          <h3>MongoDB</h3>
          <Image
            alt="image"
            src="/icons/mongodb.png"
            width={50}
            height={50}
          ></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
