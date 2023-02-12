import styled from "styled-components";

export const InputContainer = styled.div`
  padding-top: 1rem;
  > div {
    position: relative;
    background-color: ${(props) => props.theme.colors["background-content"]};
    border-radius: 0.5rem;
    border: solid 2px transparent;
    display: flex;
    align-items: center;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    justify-content: center;

    &.focused {
      border-color: ${(props) => props.theme.colors["purple-500"]};
      background-color: ${({ theme }) => theme.colors.background};
      label {
        top: 0;
        transform: translateY(-50%);
        color: ${(props) => props.theme.colors.text};
        font-weight: bold;
        font-size: 0.9rem;
        background-color: inherit;
        padding: 0 0.5rem;
      }
    }

    label {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 10px;
      transition: all 0.3s ease-in-out;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors["zinc-600"]};
    }

    input {
      width: 100%;
      height: 100%;
      padding: 0.5rem 1rem;
      border: none;
      outline: none;
      background-color: transparent;
      color: ${(props) => props.theme.colors.text};
      font-size: 1.5rem;
      z-index: 1;

      &::placeholder {
        color: ${(props) => props.theme.colors["zinc-400"]};
        font-size: 1rem;
      }
    }
  }
`;
