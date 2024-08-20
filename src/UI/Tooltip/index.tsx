import { ReactNode, useMemo, useRef, useState } from 'react';
import { TooltipStyled, TooltipWrapper } from './styled';

export type TooltipPositionType = 'top' | 'bottom';

export type TooltipProps = {
  width: number;
  text?: ReactNode;
  className?: string;
  position?: TooltipPositionType;
  offsetVertical?: number;
  offsetHorizontal?: number;
  type?: 'hover' | 'click';
  rotate?: number;
  children: ReactNode;
  arrowLeft?: number;
  arrowTop?: number;
};

export const Tooltip = ({
  text,
  className,
  position = 'top',
  offsetVertical = 40,
  offsetHorizontal,
  type = 'hover',
  children,
  width,
  rotate,
  arrowLeft,
  arrowTop,
}: TooltipProps) => {
  const [active, setActive] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const timeoutRef = useRef<number>();
  const tooltipRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (type === 'click') {
      if (active) {
        tooltipRef.current?.blur();
        setAnimationActive(false);
        return setTimeout(() => setActive(false), 150);
      }

      tooltipRef.current?.focus();
      setAnimationActive(true);
      return setActive(true);
    }

    timeoutRef.current = window.setTimeout(() => {
      setAnimationActive(true);
      setActive(true);
    }, 200);
  };

  const hideTooltip = () => {
    if (type === 'hover') {
      clearTimeout(timeoutRef.current);
    }

    setAnimationActive(false);
    setTimeout(() => {
      setActive(false);
    }, 100);
  };

  const handlers = useMemo(() => {
    if (type === 'click') {
      return {
        onClick: showTooltip,
        onBlur: hideTooltip,
      };
    }

    return {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    };
  }, [hideTooltip, showTooltip, type]);

  return (
    <TooltipWrapper tabIndex={0} className={className} {...handlers}>
      {active && (
        <TooltipStyled
          $width={width}
          $position={position}
          $offsetVertical={offsetVertical}
          $offsetHorizontal={offsetHorizontal}
          $animationActive={animationActive}
          $rotate={rotate}
          $arrowLeft={arrowLeft}
          $arrowTop={arrowTop}
        >
          {text}
        </TooltipStyled>
      )}
      {children}
    </TooltipWrapper>
  );
};
