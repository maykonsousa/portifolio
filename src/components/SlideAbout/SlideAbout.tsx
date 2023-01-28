import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation, Keyboard } from "swiper";
import Image from "next/image";
import { SlideAboutContainer } from "./SlideAbout.styles";
import Image01 from "@/assets/image01.jpg";
import Image02 from "@/assets/image02.jpg";
import Image03 from "@/assets/image03.jpg";
import Image04 from "@/assets/image04.jpg";

export const SlideAbout = () => {
  return (
    <SlideAboutContainer>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={Image04} alt="foto" width={360} height={360} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image02} alt="foto" width={360} height={360} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image03} alt="foto" width={360} height={360} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Image01} alt="foto" width={360} height={360} />
        </SwiperSlide>
      </Swiper>
    </SlideAboutContainer>
  );
};
