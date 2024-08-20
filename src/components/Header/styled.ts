import { FaUserLarge } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 3.5rem;
  gap: 40px;
  padding: 0 30px;
  background-color: ${({ theme }) => theme.colors.primaryBg};
  box-shadow: ${({ theme }) => theme.colors.primaryBoxShadow};
  z-index: 99;
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.icon};
  border-radius: 6px;
  width: 30px;
  height: 30px;
  transition: 0.2s ease;

  &:hover {
    background: rgba(162, 162, 162, 0.305);
  }
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
`;

export const UserIcon = styled(FaUserLarge)`
  margin-top: 10px;
  transition: 0.2s ease;
  cursor: pointer;
  width: 24px;
  height: 24px;
  color: ${({ theme }) => theme.colors.primaryFont};
`;
