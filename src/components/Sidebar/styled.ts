import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const SidebarStyled = styled.div<{ $isOpen: boolean }>`
  gap: 20px;
  width: 250px;
  height: calc(100vh - 3.5rem);
  background-color: ${({ theme }) => theme.colors.primaryBg};
  position: relative;
  bottom: 0;
  left: 0;
  padding: 25px;
  transition: 0.2s ease;
  overflow: hidden;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          width: 250px;
          opacity: 1;
        `
      : css`
          width: 0;
          opacity: 0;
          pointer-events: none;
          padding: 25px 0;
        `}
`;

export const RoutesList = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const RouteLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  font-size: 15px;
  text-decoration: none;
  color: ${({ theme, $active }) => ($active ? theme.colors.buttonFont : theme.colors.primaryFont)};
  background: ${({ theme, $active }) => $active && theme.colors.buttonBg};
  transition: 0.2s ease;
  width: 230px;
  height: 35px;
  text-align: center;
  border-radius: 5px;
  padding: 20px 15px;
  gap: 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.buttonHover};
    color: ${({ theme }) => theme.colors.buttonFont};
  }
`;
