import styled from 'styled-components';
import { Loader } from '../Loader';

export const ButtonLoader = styled(Loader)`
  border: ${({ theme }) => theme.colors.buttonFont};
`;

export const ButtonStyled = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.buttonFont};
  background: ${({ theme }) => theme.colors.buttonBg};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;
