import { PrivateRoutes } from '../../consts';
import { LogoStyled, LogoText, LogoWrapper } from './styled';

export const Logo = () => {
  return (
    <LogoWrapper to={PrivateRoutes.Home}>
      <LogoStyled src="../../../public/img/icon.svg" />
      <LogoText>Asana</LogoText>
    </LogoWrapper>
  );
};
