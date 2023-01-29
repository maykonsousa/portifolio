import styled from "styled-components";

export const XpMobileNavContainer = styled.div`
  //hide the nav on desktop
  @media (min-width: 768px) {
    display: none;
  }

  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const XpMobileContent = styled.div`
  width: 100%;
  max-height: 100%;

  .swiper {
    width: 100%;
    height: 50vh;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    padding: 0 1rem;
    padding-top: 0.5rem;

    /* Center slide text vertically */
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

export const XpCard = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors["background-content"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin: 1rem;
  margin-top: 2rem;
  border-radius: 8px;
  padding: 1rem;
  padding-top: 1rem;
  gap: 0.5rem;
  max-height: fit-content;
  overflow: auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  > div {
    display: flex;
  }

  > img {
    margin-bottom: 1rem;
  }

  p {
    margin: 2rem 1rem;
    text-align: justify;
    font-size: 0.9rem;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;
