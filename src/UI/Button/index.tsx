import { ReactNode } from 'react';
import { ButtonLoader, ButtonStyled } from './styled';

type ButtonProps = {
  children: ReactNode;
  loading?: boolean;
};

export const Button = ({ children, loading }: ButtonProps) => {
  return <ButtonStyled>{loading ? <ButtonLoader /> : children}</ButtonStyled>;
};
