import styled from "styled-components";

export const ThemeToggleContainer = styled.div`
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    width: 50px;
    height: 26px;
    display: flex;
    border-radius: 50px;
    border: solid 1px ${({ theme }) => theme.colors["purple-500"]};
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.text};
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
  }

  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball {
    transform: translateX(24px);
  }

  .fa-moon {
    color: pink;
  }

  .fa-sun {
    color: yellow;
  }
`;
