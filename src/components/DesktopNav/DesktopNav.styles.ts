import styled from "styled-components";

export const DesktopNavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
  gap: 2rem;
  font-weight: bold;

  @media (max-width: 720px) {
    display: none;
  }

  li {
    a {
      &:hover {
        text-decoration: none;
      }
    }
  }
`;
