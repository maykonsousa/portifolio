import styled from "styled-components";

export const ProjectsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  max-height: calc(85vh -6rem);
  gap: 1rem;

  animation: fade 2s;

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
