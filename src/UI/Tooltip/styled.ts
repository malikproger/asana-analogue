import styled, { css } from 'styled-components';
import { TooltipPositionType } from '.';

type TooltipStyleProps = {
  $position: TooltipPositionType;
  $offsetVertical?: number;
  $offsetHorizontal?: number;
  $width?: number;
  $animationActive: boolean;
  $rotate?: number;
};

export const TooltipWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const TooltipStyled = styled.div<TooltipStyleProps>`
  transition: 0.2s ease;
  position: absolute;
  border-radius: 12px;
  left: 50%;
  transform: ${({ $offsetHorizontal = 50 }) => `translateX(-${$offsetHorizontal}%)`};
  padding: 8px;
  color: ${({ theme }) => theme.colors.tooltipFont};
  background: ${({ theme }) => theme.colors.tooltipBg};
  font-size: 14px;
  line-height: 1;
  z-index: 1001;
  width: ${({ $width }) => `${$width}px`};
  text-align: center;

  &::before {
    content: '';
    position: absolute;
    left: 65px;
    top: -10px;
    border: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.tooltipBg};
    transform: ${({ $rotate }) => `rotate(${$rotate}deg)`};
    transition: 0.2s ease;
  }

  &::after {
    border-top: 10px solid ${({ theme }) => theme.colors.tooltipBg};
    bottom: -19px;
    transition: 0.2s ease;
  }

  ${({ $animationActive }) =>
    $animationActive
      ? css`
          animation: tooltipFadeIn 0.15s ease;
        `
      : css`
          animation: tooltipFadeOut 0.15s ease;
        `}

  @keyframes tooltipFadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes tooltipFadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  ${({ $position, $offsetVertical }) => {
    return (
      ($position === 'top' &&
        css`
          top: -${$offsetVertical}px;
        `) ||
      ($position === 'bottom' &&
        css`
          bottom: -${$offsetVertical}px;
        `)
    );
  }}
`;
