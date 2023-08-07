import styled from "styled-components";

export const ExperiencesPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  height: 100%;
  max-height: calc(85 vh - 6rem);
  width: 100%;
  padding: 1rem 2rem;
  > p {
    margin-top: 1rem;
    text-align: center;
  }

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
