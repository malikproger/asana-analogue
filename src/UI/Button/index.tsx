import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonLoader, ButtonStyled } from './styled';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  loading?: boolean;
  className?: string;
};

export const Button = ({ children, loading, className, ...props }: ButtonProps) => {
  return (
    <ButtonStyled className={className} {...props}>
      {loading ? <ButtonLoader /> : children}
    </ButtonStyled>
  );
};
