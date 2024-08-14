import { AuthForm, Logo, ThemeToggle } from '../../components';
import { AuthHeader, AuthPageStyled } from './styled';

export const AuthPage = () => {
  return (
    <AuthPageStyled>
      <AuthHeader>
        <Logo />
        <ThemeToggle tooltipWithOffset />
      </AuthHeader>
      <AuthForm />
    </AuthPageStyled>
  );
};
