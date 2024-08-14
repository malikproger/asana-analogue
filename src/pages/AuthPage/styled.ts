import styled from 'styled-components';

export const AuthPageStyled = styled.div`
  transition: 0.2s ease;
  background: ${({ theme }) => theme.colors.mainBg};
`;

export const AuthHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 20px;
  padding: 0 60px;
`;
