import { FaBars } from 'react-icons/fa';
import { Logo } from '../Logo';
import { ThemeToggle } from '../ThemeToggle';
import { HeaderStyled, LeftSide, MenuIconOpen } from './styled';

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
      <ThemeToggle tooltipWithOffset />
    </HeaderStyled>
  );
};
