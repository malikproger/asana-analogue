import { useThemeScope } from '../../scopes/ThemeScope';
import { ThemeToggleStyled } from './styled';

export const ThemeToggle = () => {
  const { toggleTheme } = useThemeScope();
  return <ThemeToggleStyled onClick={toggleTheme}>ThemeToggle</ThemeToggleStyled>;
};
