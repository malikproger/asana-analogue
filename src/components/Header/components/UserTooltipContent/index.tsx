import { useLogoutMutation } from '../../../../api/authService';
import { LogoutIcon, Option, OptionText, TooltipContentStyled } from './styled';

export const UserTooltipContent = () => {
  const [logout] = useLogoutMutation();

  return (
    <TooltipContentStyled>
      <Option onClick={logout}>
        <LogoutIcon />
        <OptionText>Выход</OptionText>
      </Option>
    </TooltipContentStyled>
  );
};
