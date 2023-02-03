import styled from "styled-components";

export const VideoModalContainer = styled.div``;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 2rem;
`;

export const ModalContent = styled.div`
  background-color: ${({ theme }) => theme.colors["background-content"]};
  width: 100%;
  max-width: 800px;
  height: 100%;
  max-height: 600px;
  border-radius: 8px;
  padding: 2rem 2rem;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @keyframes slideIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.slideIn {
    animation: slideIn 0.5s ease-in-out;
  }

  &.slideOut {
    animation: slideOut 0.5s ease-in-out;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 2rem;
  }

  svg {
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors["purple-500"]};
    }
  }
`;

export const VideoContainer = styled.iframe`
  width: 100%;
  height: 100%;
  border: solid 2px ${({ theme }) => theme.colors["purple-500"]};
  border-radius: 8px;
`;
