import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
  height: 3.5rem;
  gap: 40px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  z-index: 99;
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-left: 2rem;
  color: ${({ theme }) => theme.colors.icon};
  border-radius: 6px;
  width: 30px;
  height: 30px;
  transition: 0.2s ease;

  &:hover {
    background: rgba(33, 23, 23, 0.156);
  }
`;
