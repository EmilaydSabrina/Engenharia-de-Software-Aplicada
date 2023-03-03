import styled, { css } from "styled-components";

interface ButtonContainerProps {
  variant?: boolean;
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100%;
  height: 2.625rem;
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme["base-button"]};
  padding: 0.5rem;
  line-height: 0;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-white"]};
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s, border 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  ${({ variant }) =>
    variant &&
    css`
      background: ${(props) => props.theme["base-white"]};
      color: ${(props) => props.theme["base-text"]};
    `}

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
    border: 2px solid ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-white"]};
  }
`;
