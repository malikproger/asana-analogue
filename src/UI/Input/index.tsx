import { InputHTMLAttributes } from 'react';
import { ErrorText, InputStyled, LabelWrapper, Wrapper } from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: {
    visible?: boolean;
    text?: string;
  };
};

export const Input = ({ error, value, ...props }: InputProps) => {
  return (
    <Wrapper data-error={error?.visible && 'error'}>
      {error && (
        <LabelWrapper>
          {error?.visible && <ErrorText>{error.text || 'Обязательное поле'}</ErrorText>}
        </LabelWrapper>
      )}
      <InputStyled value={value} {...props} />
    </Wrapper>
  );
};
