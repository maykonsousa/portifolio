import styled from "styled-components";

export const SlideAboutContainer = styled.div`
  .swiper {
    width: 400px;
    height: 400px;
  }

  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 400px;
    height: 400px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    border-radius: 8px;
    box-shadow: rgba(168, 85, 247, 0.56) 0px 22px 70px 4px;
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
    margin-right: -3rem;
  }

  .swiper-button-prev {
    margin-left: -3rem;
  }
  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors["text"]};
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors["text"]};
    margin-top: 5rem;
  }
`;