import { FaBars } from 'react-icons/fa';
import { Logo } from '../Logo';
import { ThemeToggle } from '../ThemeToggle';
import { HeaderStyled, MenuIconOpen } from './styled';

type HeaderProps = {
  onSidebarToggle: () => void;
};

export const Header = ({ onSidebarToggle }: HeaderProps) => {
  return (
    <HeaderStyled>
      <MenuIconOpen to="#" onClick={onSidebarToggle}>
        <FaBars />
      </MenuIconOpen>
      <Logo />
      <ThemeToggle />
    </HeaderStyled>
  );
};
