import { useThemeScope } from '../../scopes/ThemeScope';
import { Moon, Sun, ThemeToggleStyled } from './styled';

export const ThemeToggle = () => {
  const { toggleTheme, isDarkTheme } = useThemeScope();
  return (
    <ThemeToggleStyled onClick={toggleTheme} $isDark={isDarkTheme}>
      {isDarkTheme ? <Sun /> : <Moon />}
    </ThemeToggleStyled>
  );
};
