import { useThemeScope } from '../../scopes/ThemeScope';
import { Tooltip } from '../../UI';
import { Moon, Sun, ThemeToggleStyled } from './styled';

type ThemeToggleProps = {
  tooltipWithOffset?: boolean;
};

export const ThemeToggle = ({ tooltipWithOffset }: ThemeToggleProps) => {
  const { toggleTheme, isDarkTheme } = useThemeScope();
  return (
    <Tooltip
      width={150}
      position="bottom"
      text="Переключить тему"
      offsetVertical={45}
      offsetHorizontal={tooltipWithOffset ? 70 : undefined}
      rotate={95}
    >
      <ThemeToggleStyled onClick={toggleTheme} $isDark={isDarkTheme}>
        {isDarkTheme ? <Sun /> : <Moon />}
      </ThemeToggleStyled>
    </Tooltip>
  );
};
