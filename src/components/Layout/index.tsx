import { useEffect, useState } from 'react';
import { Header, Sidebar } from '..';
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
        <Sidebar open={isSidebarOpen} />
        {children}
      </LayoutChildrenStyled>
    </LayoutMainStyled>
  );
};
