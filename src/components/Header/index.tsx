import { FaBars } from 'react-icons/fa';
import { Tooltip } from '../../UI';
import { Logo } from '../Logo';
import { ThemeToggle } from '../ThemeToggle';
import { UserTooltipContent } from './components';
import { HeaderStyled, LeftSide, MenuIconOpen, RightSide, UserIcon } from './styled';

type HeaderProps = {
  onSidebarToggle: () => void;
};

export const Header = ({ onSidebarToggle }: HeaderProps) => {
  return (
    <HeaderStyled>
      <LeftSide>
        <MenuIconOpen to="#" onClick={onSidebarToggle}>
          <FaBars />
        </MenuIconOpen>
        <Logo />
      </LeftSide>
      <RightSide>
        <ThemeToggle tooltipWithOffset />
        <Tooltip
          text={<UserTooltipContent />}
          width={150}
          offsetVertical={62}
          offsetHorizontal={78}
          type="click"
          position="bottom"
          rotate={180}
          arrowLeft={106}
          arrowTop={-20}
        >
          <UserIcon />
        </Tooltip>
      </RightSide>
    </HeaderStyled>
  );
};
