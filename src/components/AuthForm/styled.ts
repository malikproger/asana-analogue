import styled from 'styled-components';
import { Button, Input } from '../../UI';

export const AuthFormStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
  flex-direction: column;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.primaryFont};
  margin-bottom: 20px;
`;

export const InputFormStyled = styled(Input)`
  width: 400px;
  height: 50px;
`;

export const ButtonFormStyled = styled(Button)`
  width: 400px;
  height: 50px;
  margin-top: 20px;
`;

export const AuthLabel = styled.div`
  margin-top: 15px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.secondaryFont};
  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const AuthLink = styled.div`
  transition: 0.2s ease;
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondaryFont};
  color: ${({ theme }) => theme.colors.secondaryFont};
  margin-left: 3px;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryFont};
    border-bottom: 1px solid ${({ theme }) => theme.colors.primaryFont};
  }
`;
