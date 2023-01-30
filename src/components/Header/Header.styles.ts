import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 100px;
  background-color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  @media (max-width: 849px) {
    height: 70px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;

  @media (max-width: 849px) {
    padding: 0 1rem;
    display: grid;
    grid-template-columns: 2rem 1fr;
  }
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 849px) {
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderNav = styled.ul`
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
