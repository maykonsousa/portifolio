import React, { useContext } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  XpCard,
  XpMobileContent,
  XpMobileNavContainer,
} from "./XpMobileNav.styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ExperiencesData } from "@/helpers/experiencesData";
import Image from "next/image";
import { GeneralContext } from "@/context/GeneralContext";
import { TechButton } from "../TechButton/TechButton";

export const XpMobileNav = () => {
  const { themeName } = useContext(GeneralContext);
  return (
    <XpMobileNavContainer>
      <XpMobileContent>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {ExperiencesData?.map(
            ({
              id,
              description,
              company,
              logoDark,
              logoLight,
              ocupation,
              period,
              techs,
            }) => (
              <SwiperSlide key={id}>
                <XpCard>
                  <Image
                    src={themeName === "dark" ? logoDark : logoLight}
                    alt={`logo ${company}`}
                    width={100}
                  />

                  <h4>{ocupation}</h4>
                  <small>{period}</small>
                  <p>{description}</p>

                  <ul>
                    {techs.map((tech) => (
                      <TechButton name={tech} key={tech} />
                    ))}
                  </ul>
                </XpCard>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </XpMobileContent>
    </XpMobileNavContainer>
  );
};
