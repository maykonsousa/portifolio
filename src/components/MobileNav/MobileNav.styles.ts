import styled from "styled-components";

interface ThemeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

export const MobileNavContainer = styled.div<MobileNavProps>`
  ${({ open }) => {
    if (!open) {
      return `
            display: none;
        `;
    }
  }};

  //hide on desktop
  @media (min-width: 849px) {
    display: none;
  }

  border-radius: 4px;
  z-index: 100;
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors["zinc-700"]};
  transition: all 0.2s ease-in-out;
  animation: slideIn 0.5s ease-in-out;
  animation-fill-mode: forwards;
  > div {
    margin-top: 1rem;
    width: 100%;
    color: ${({ theme }) => theme.colors["zinc-100"]};

    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      background-color: transparent;
      border: none;
      color: ${({ theme }) => theme.colors["zinc-100"]};
      cursor: pointer;
      font-weight: bold;
    }
  }

  @keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }

    0% {
      transform: translateX(-100%);
    }
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    li {
      width: 100%;
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 0.2rem 0;
      border-bottom: solid 3px transparent;
      &.active {
        border-bottom: solid 3px ${({ theme }) => theme.colors["purple-500"]};
      }
      cursor: pointer;
      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        gap: 2rem;
      }

      a {
        color: ${({ theme }) => theme.colors["zinc-100"]};
        width: 100%;
        height: 100%;
        display: block;
        padding: 0.5rem 1rem;
        font-weight: bold;

        &:hover {
          background-color: ${({ theme }) => theme.colors["purple-500"]};
        }
      }
    }
  }
`;

export const ThemeIconContainer = styled.button<ThemeButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid 2px transparent;
  background-color: transparent;
  padding: 0.5rem;

  color: ${({ theme }) => theme.colors["zinc-100"]};
  cursor: pointer;
  ${({ active, theme }) => {
    if (active) {
      return `
        border-color: ${theme.colors["purple-500"]};
        color: ${theme.colors["purple-500"]};
      `;
    } else {
      return `
                &:hover {
                    border-color: ${theme.colors["purple-500"]};
                    color: ${theme.colors["purple-500"]};
                }
            `;
    }
  }}

  &:hover {
    border-color: ${({ theme }) => theme.colors["purple-500"]};
    color: ${({ theme }) => theme.colors["purple-500"]};
  }
`;
