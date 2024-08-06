import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { NavBar } from '../NavBar';
import { LayoutChildrenStyled, LayoutMainStyled } from './styled';
import { getCachedOpen, setCachedOpen } from './utils';

type LayoutProps = {
  children: string;
};

export const Layout = ({ children }: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => getCachedOpen());

  useEffect(() => {
    setCachedOpen(isSidebarOpen);
  }, [isSidebarOpen]);

  return (
    <LayoutMainStyled>
      <Header onSidebarToggle={() => setIsSidebarOpen((prev) => !prev)} />
      <LayoutChildrenStyled>
        <NavBar open={isSidebarOpen} />
        {children}
      </LayoutChildrenStyled>
    </LayoutMainStyled>
  );
};
