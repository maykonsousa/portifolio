import styled from "styled-components";

export const MailModalContainer = styled.div``;

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

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 100%;
  .spinner {
    color: ${({ theme }) => theme.colors["purple-500"]};
    svg {
      animation: spin 1s linear infinite;

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }
  }

  .success {
    color: ${({ theme }) => theme.colors["green-500"]};
  }

  .error {
    color: ${({ theme }) => theme.colors["red-500"]};
  }

  h2 {
    font-size: 3rem;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  button {
    width: 100%;
    padding: 1rem 2rem;
    border-radius: 8px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.colors["text"]};
    font-size: 1.2rem;
    font-weight: bold;

    &.close {
      background-color: ${({ theme }) => theme.colors["zinc-400"]};

      &:hover {
        background-color: ${({ theme }) => theme.colors["zinc-500"]};
      }
    }

    &.whatsapp {
      background-color: ${({ theme }) => theme.colors["green-500"]};

      &:hover {
        background-color: ${({ theme }) => theme.colors["green-600"]};
      }
    }
  }
`;

