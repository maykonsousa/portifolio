import styled from "styled-components";

export const ExperiencesPageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  height: 100%;
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
