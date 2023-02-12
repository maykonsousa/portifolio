import styled from "styled-components";

export const ContactPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  height: 100%;
  flex: 1;

  @media (max-width: 849px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex: 1;
    padding: 0;
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 1rem 2rem;
  gap: 2rem;

  @media (max-width: 849px) {
    display: none;
  }
`;
export const InformationsCard = styled.div`
  background-color: ${({ theme }) => theme.colors["background-content"]};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex: 1;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  padding: 1rem 2rem;
  gap: 1rem;

  animation: slide-up 0.5s ease-in-out forwards;

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    flex: 1;
    width: 100%;

    .icon {
      font-size: 2rem;
      border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      transition: all 0.3s;

      //mobile
      @media (max-width: 849px) {
        display: none;
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors["purple-500"]};
        color: ${({ theme }) => theme.colors["text"]};
      }
    }

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      list-style: none;

      li {
        a {
          font-size: 1.5rem;

          transition: all 0.3s ease-in-out;
          border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
          width: 3rem;
          height: 3rem;
          align-items: center;
          justify-content: center;
          display: flex;
          border-radius: 8px;

          &:hover {
            background-color: ${({ theme }) => theme.colors["purple-500"]};
            color: ${({ theme }) => theme.colors["text"]};
          }
        }
      }
    }

    span {
      font-size: 1.2rem;
      font-weight: bold;
      line-height: 1.5;
    }
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;

  > form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    width: 100%;
    padding: 1rem 2rem;

    @media (max-width: 849px) {
      padding: 0;
      height: 75vh;
    }
  }

  animation: slide-up 0.5s ease-in-out forwards;

  @keyframes slide-up {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const FormButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const EmailButton = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["zinc-100"]};
  background-color: ${({ theme }) => theme.colors["purple-500"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors["purple-600"]};
  }

  @media (max-width: 849px) {
    display: none;
  }
`;

export const WhatsappButton = styled.button`
  background-color: ${({ theme }) => theme.colors["green-500"]};
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors["zinc-100"]};

  &:hover {
    background-color: ${({ theme }) => theme.colors["green-600"]};
  }
`;
