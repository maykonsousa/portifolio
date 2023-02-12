import styled from "styled-components";

export const ProjectsGroupMobileContainer = styled.div`
  //only for mobile
  @media (min-width: 768px) {
    display: none;
  }

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 1rem 0;

  //animate keyframes
  animation: 2s ease-in-out 0s 1 fadeContent;

  @keyframes fadeContent {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const MobileContent = styled.div`
  width: 100%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 60vh;
    background: transparent;
    padding: 0 2rem;
  }

  .swiper-slide {
    text-align: center;
    padding: 0 1rem;
    padding-top: 0.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors["text"]};
    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors["purple-600"]};
    }
  }

  .swiper-button-next {
    margin-right: -1rem;
  }

  .swiper-button-prev {
    margin-left: -1rem;
  }
`;

