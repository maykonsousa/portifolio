import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: calc(100vh - 150px);
  > div {
  }

  @media (max-width: 849px) {
    padding: 0 1rem;
  }
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 849px) {
    padding: 0;
    padding-top: 1rem;
    overflow: auto;
  }
`;
