import styled from "styled-components";

export const TextAreaContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background-color: ${({ theme }) => theme.colors["background-content"]};
    height: 100%;
    border-radius: 8px;
    border: solid 2px transparent;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    label {
      position: absolute;
      top: 1rem;
      left: 1rem;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors["zinc-600"]};
      transition: all 0.3s ease-in-out;
    }

    &.focused {
      border-color: ${({ theme }) => theme.colors["purple-500"]};
      background-color: ${({ theme }) => theme.colors["background"]};

      label {
        top: 0;
        transform: translateY(-50%);
        background-color: ${({ theme }) => theme.colors["background"]};
        padding: 0 0.5rem;
        font-size: 1rem;
        font-weight: bold;
        color: ${({ theme }) => theme.colors["text"]};
      }
    }

    textarea {
      width: 100%;
      height: 100%;
      flex: 1;
      resize: none;
      border: none;
      outline: none;
      background: transparent;
      padding: 1rem 2rem;
      color: ${({ theme }) => theme.colors["text"]};
      font-size: 1.5rem;
    }
  }
`;

