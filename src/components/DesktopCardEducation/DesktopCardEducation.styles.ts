import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 32rem;

  aside {
    width: 3rem;
    border-left: solid 1px ${({ theme }) => theme.colors["purple-800"]};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 1.5rem;
    padding: 1rem 0;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    > div {
      writing-mode: vertical-lr;
      align-items: center;
      justify-content: center;
      line-height: 3rem;
    }

    &:hover,
    &.active {
      background-color: ${({ theme }) => theme.colors["purple-800"]};
    }

    &.last {
      border-right: solid 1px ${({ theme }) => theme.colors["purple-800"]};
    }
  }

  // animation: slideFromRight 0.5s ease-in-out;

  @keyframes slideFromRight {
    0% {
      width: 0;
      display: none;
    }
    100% {
      width: 40rem;
      opacity: 1;
    }

    0% {
      opacity: 0;
    }
  }

  main {
    width: 40rem;
    background-color: ${({ theme }) => theme.colors["background-content"]};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    animation: slideFromRight 0.5s ease-in-out;

    .header {
      display: flex;
      align-items: center;
      gap: 2rem;

      width: 100%;
      padding: 1rem 2rem;
      > div {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        > div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-weight: bold;
        }
      }
    }

    .content {
      width: 100%;
      padding: 0 2rem;
      flex: 1;

      p {
        font-size: 1.2rem;
        text-align: justify;
      }
    }

    .educator {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 1rem 0;
      border-top: solid 1px ${({ theme }) => theme.colors["purple-800"]};

      > div {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        img {
          width: 4rem;
          height: 4rem;
          border-radius: 50%;
          border: solid 2px ${({ theme }) => theme.colors["purple-800"]};
          padding: 0.2rem;
        }
      }

      ul {
        margin-top: 1rem;
        list-style: none;
        display: flex;
        gap: 1rem;

        li {
          a {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 3rem;
            height: 3rem;
            border-radius: 4px;
            border: solid 1px ${({ theme }) => theme.colors["purple-800"]};
            padding: 0.5rem;
            transition: all 0.2s ease-in-out;

            &:hover {
              background-color: ${({ theme }) => theme.colors["purple-800"]};
              color: ${({ theme }) => theme.colors["text"]};
              width: 3.5rem;
              height: 3.5rem;
            }
          }
        }
      }
    }
  }
`;

