import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  height: calc(100vh - 28px);

  display: flex;
  align-items: center;
  justify-content: center;

  & form {
    margin-top: .5rem;

    display: flex;
    flex-direction: column;
    gap: 12px;

    & > div {
      display: flex;
      gap: 12px;
    }
  }
`;

export const FooterContainer = styled.footer`
  margin-top: 16px;

  & > span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 14px;

    display: flex;
    align-items: center;
    gap: 4px;
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
