import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';
import styled, { css } from 'styled-components';

export const Moon = styled(IoMoonOutline)``;

export const Sun = styled(IoSunnyOutline)``;

export const ThemeToggleStyled = styled.div<{ $isDark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  font-size: 25px;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.icon};
  transition: 0.2s ease;
  cursor: pointer;

  ${({ $isDark }) => css`
    transform: rotate(${$isDark ? 90 : 0}deg);
    background: ${$isDark ? '#ffffff36' : '#89898930'};

    &:hover {
      background: ${$isDark ? '#ffffff4f' : '#cacaca59'};
    }
  `}
`;
