import styled from "styled-components";

export const ProjectsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem 2rem;
  gap: 2rem;
  width: 100%;
  max-height: 63vh;

  flex: content;
  overflow-y: auto;
  align-items: center;
  justify-content: center;

  //tablet
  @media (max-width: 1280px) {
    display: none;
  }
`;
