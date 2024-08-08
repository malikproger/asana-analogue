import styled from 'styled-components';

export const Label = styled.label`
  transition: 0.2s ease;
  color: ${({ theme }) => theme.colors.primaryFont};
`;

export const InputStyled = styled.input`
  transition: 0.2s ease;
  height: 48px;
  border-radius: 10px;
  padding: 0 15px;
  color: ${({ theme }) => theme.colors.primaryFont};
  background: ${({ theme }) => theme.colors.elemBg};
  border: 1px solid lightgray;
  position: relative;

  &:focus {
    border: 1px solid ${({ theme }) => theme.colors.borderActive};
    &::placeholder {
      transition: 0.2s ease;
      transform: translate(0, 30px);
    }
  }
  &::placeholder {
    transition: 0.2s ease;
    color: ${({ theme }) => theme.colors.secondaryFont};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${Label} {
    font-size: 16px;
  }

  ${InputStyled} {
    font-size: 16px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ErrorText = styled.span`
  transition: 0.2s ease;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.errorFont};
  margin-top: 5px;
`;
