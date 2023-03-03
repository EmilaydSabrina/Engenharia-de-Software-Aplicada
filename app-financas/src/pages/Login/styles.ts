import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 1.75rem);

  & > div {
    text-align: center;

    & > img {
      width: 12.5rem;
      height: 12.5rem;
    }
  }

  display: flex;
  align-items: center;
  justify-content: center;

  & form {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 1rem;

  & > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;

    display: flex;
    align-items: center;
    gap: 0.25rem;
    justify-content: center;

    & a {
      color: ${(props) => props.theme["base-button"]};
      text-decoration: none;
      font-weight: bold;
      transition: color 0.2s;

      &:hover {
        color: ${(props) => props.theme["base-hover"]};
      }
    }
  }
`;
