import React, { useContext } from "react";
import {
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VideoContainer,
  VideoModalContainer,
} from "./VideoModal.styles";
import { AiOutlineClose } from "react-icons/ai";
import { IProjectData } from "@/helpers/projectsData";
import { GeneralContext } from "@/context/GeneralContext";

interface VideoModalProps {
  project: IProjectData | null;
}
export const VideoModal = ({ project }: VideoModalProps) => {
  const { openVideoModal, onCloseVideoModal } = useContext(GeneralContext);

  return (
    <VideoModalContainer>
      {openVideoModal && (
        <ModalOverlay>
          <ModalContent className={openVideoModal ? "slideIn" : "slideOut"}>
            <ModalHeader>
              <h2>{project?.title}</h2>
              <AiOutlineClose size={24} onClick={onCloseVideoModal} />
            </ModalHeader>
            <VideoContainer
              src={`${project?.links.video}?&autoplay=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></VideoContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </VideoModalContainer>
  );
};
