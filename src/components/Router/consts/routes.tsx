import { RouteProps } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../../../consts';
import { AuthPage, HomePage, MyTasksPage } from '../../../pages';

export const privateRoutes: RouteProps[] = [
  {
    path: PrivateRoutes.Home,
    element: <HomePage />,
  },
  {
    path: PrivateRoutes.MyTasks,
    element: <MyTasksPage />,
  },
];

export const publicRoutes: RouteProps[] = [
  {
    path: PublicRoutes.Auth,
    element: <AuthPage />,
  },
];
