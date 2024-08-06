import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { tabRoutes } from './consts';
import { RouteLink, RoutesList, SidebarStyled } from './styled';
import { getActiveTabRoute } from './utils';

type NavBarProps = {
  open: boolean;
};

export const NavBar = ({ open }: NavBarProps) => {
  const { pathname } = useLocation();
  const [activeTabRoute, setActiveTabRoute] = useState(getActiveTabRoute(pathname));

  useEffect(() => {
    const newActiveTabRoute = getActiveTabRoute(pathname);
    setActiveTabRoute(newActiveTabRoute);
  }, [pathname]);

  return (
    <SidebarStyled $isOpen={open}>
      <RoutesList>
        {tabRoutes.map((route) => (
          <RouteLink
            key={route.path}
            to={route.path}
            onClick={() => setActiveTabRoute(activeTabRoute)}
            $active={activeTabRoute === route.path}
          >
            {route.icon}
            {route.title}
          </RouteLink>
        ))}
      </RoutesList>
    </SidebarStyled>
  );
};
