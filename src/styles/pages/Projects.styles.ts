import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  max-height: calc(85 vh -6rem);
  gap: 2rem;
`;

export const ProjectsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 1rem 2rem;
  gap: 2rem;
  width: 100%;
  max-height: 63vh;

  flex: content;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    pad: 1rem;
  }
`;
