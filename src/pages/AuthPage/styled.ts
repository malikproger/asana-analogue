import styled from 'styled-components';

export const AuthPageStyled = styled.div`
  height: 100vh;
  transition: 0.2s ease;
  background: ${({ theme }) => theme.colors.mainBg};
`;

export const AuthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 60px;
  padding-top: 20px;
`;
