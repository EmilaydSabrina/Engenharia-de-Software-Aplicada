import { ReactNode, ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: boolean;
}

export function BaseButton({ children, variant, ...props }: BaseButtonProps) {
  return (
    <ButtonContainer variant={variant} {...props}>
      {children}
    </ButtonContainer>
  );
}
