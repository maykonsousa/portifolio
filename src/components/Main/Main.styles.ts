import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  min-height: 85vh;
  max-height: 85vh;

  width: 100%;
  bir > div {
  }

  @media (max-width: 849px) {
    padding: 0 1rem;
  }
`;

export const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  min-height: 85vh;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 849px) {
    padding: 0;
    padding-top: 1rem;
    overflow: auto;
  }
`;
