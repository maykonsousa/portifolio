import styled from "styled-components";

interface ThemeButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export const MobileNavContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${({ theme }) => theme.colors["zinc-700"]};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    li {
      width: 100%;
      align-items: center;
      justify-content: center;
      width: 100%;
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
