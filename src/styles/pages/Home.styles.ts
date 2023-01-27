import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: calc(100vh - 20rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  animation: slide-in-left 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  //mobile
  @media (max-width: 768px) {
    height: 20rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  img {
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
    border: solid 8px ${({ theme }) => theme.colors["zinc-600"]};
    cursor: pointer;
    filter: grayscale(50%);
    transition: all 0.4s ease-in-out;

    &:hover {
      filter: grayscale(0%);
      border: solid 8px ${({ theme }) => theme.colors["purple-500"]};
    }

    @keyframes slide-in-left {
      0% {
        transform: translateX(-1000px);
      }

      100% {
        transform: translateX(0);
      }
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: calc(100vh - 20rem);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding-left: 2rem;
  animation: slide-in-right 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  //mobile

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors["zinc-600"]};
  }

  h1 {
    font-size: 4rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    list-style: none;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        font-size: 1.5rem;
      }

      &:hover {
        color: ${({ theme }) => theme.colors.text};
        font-weight: bold;

        svg {
          color: ${({ theme }) => theme.colors["purple-500"]};
        }
      }
    }
  }
  @keyframes slide-in-right {
    0% {
      transform: translateX(1000px);
    }

    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    height: 20rem;
    padding: 0;
    align-items: center;

    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const DownloadButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
  color: ${({ theme }) => theme.colors["purple-500"]};
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors["purple-500"]};
    color: ${({ theme }) => theme.colors.text};
  }
`;
