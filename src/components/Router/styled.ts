import styled from 'styled-components';
import { Loader } from '../../UI';

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transition: 0.2s ease;
  background: ${({ theme }) => theme.colors.mainBg};
`;

export const AuthLoader = styled(Loader)``;
