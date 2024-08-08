import styled from 'styled-components';
import { Loader } from '../Loader';

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

export const ButtonLoader = styled(Loader)`
  background: radial-gradient(farthest-side, ${({ theme }) => theme.colors.buttonIcon} 94%, #0000)
      top/8px 8px no-repeat,
    conic-gradient(#0000 30%, ${({ theme }) => theme.colors.buttonIcon});
`;
