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
  children: ReactNode;
};

export const Tooltip = ({
  text,
  className,
  position = 'top',
  offsetVertical = 40,
  offsetHorizontal,
  children,
  width,
}: TooltipProps) => {
  const [active, setActive] = useState(false);
  const [animationActive, setAnimationActive] = useState(false);
  const timeoutRef = useRef<number>();

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => {
      setAnimationActive(true);
      setActive(true);
    }, 200);
  };

  const hideTooltip = () => {
    clearTimeout(timeoutRef.current);
    setAnimationActive(false);
    setTimeout(() => setActive(false), 150);
  };

  const handlers = useMemo(() => {
    return {
      onMouseEnter: showTooltip,
      onMouseLeave: hideTooltip,
    };
  }, [showTooltip, hideTooltip]);

  return (
    <TooltipWrapper className={className} {...handlers}>
      {active && (
        <TooltipStyled
          $width={width}
          $position={position}
          $offsetVertical={offsetVertical}
          $offsetHorizontal={offsetHorizontal}
          $animationActive={animationActive}
        >
          {text}
        </TooltipStyled>
      )}
      {children}
    </TooltipWrapper>
  );
};
