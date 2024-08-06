import styled from 'styled-components';

export const LayoutChildrenStyled = styled.div`
  display: flex;
  flex-direction: row;
`;

export const LayoutMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.2s ease;
  background: ${({ theme }) => theme.colors.mainBg};
`;
