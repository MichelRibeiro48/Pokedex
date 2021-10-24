import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

// import { Container } from './styles';

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <ButtonContainer {...props} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
