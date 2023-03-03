import styled from "styled-components";

export const InputContainer = styled.input`
  width: 100%;
  height: 2.625rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: 2px solid #ccc; //${(props) => props.theme["base-button"]};
  background: ${(props) => props.theme["base-background"]};

  &:focus {
    border: 2px solid ${(props) => props.theme["base-hover"]};
  }
`;
