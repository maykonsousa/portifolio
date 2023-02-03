import React, { useContext } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  ProjectsGroupMobileContainer,
  MobileContent,
} from "./ProjectsGroupMobile.styles";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GeneralContext } from "@/context/GeneralContext";
import { ProjectCardMobile } from "../ProjectCardMobile/ProjectCardMobile";
import { useSwiperSlide } from "swiper/react";

export const ProjectsGroupMobile = () => {
  const { projects } = useContext(GeneralContext);

  return (
    <ProjectsGroupMobileContainer>
      <MobileContent>
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          scrollbar={true}
          mousewheel={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {projects?.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCardMobile project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </MobileContent>
    </ProjectsGroupMobileContainer>
  );
};
