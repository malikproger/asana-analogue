import { useSelector } from 'react-redux';
import { Navigate, Route, RouteProps, Routes } from 'react-router-dom';
import { Layout as PrivatePageLayout } from '../../components';
import { PrivateRoutes, PublicRoutes } from '../../consts';
import { selectIsAuthenticated, selectIsAuthenticating } from '../../slices/authSlice';
import { Loader } from '../../UI';
import { privateRoutes, publicRoutes } from './consts';
import { Layout } from './styled';

export const Router = () => {
  const isAuthenticating = useSelector(selectIsAuthenticating);
  const isAuthenticated = useSelector(selectIsAuthenticated);

  const renderSingleRoute = (routeProps: RouteProps) => {
    return <Route {...routeProps} key={routeProps.path} />;
  };

  const renderRoutes = () => {
    if (!isAuthenticated) {
      return (
        <Routes>
          {publicRoutes.map(renderSingleRoute)}
          <Route path="*" element={renderRedirect()} />
        </Routes>
      );
    }

    return (
      <PrivatePageLayout>
        <Routes>
          {privateRoutes.map(renderSingleRoute)}
          <Route path="*" element={renderRedirect()} />
        </Routes>
      </PrivatePageLayout>
    );
  };

  const renderRedirect = () => {
    if (!isAuthenticated) {
      return <Navigate to={PublicRoutes.Auth} />;
    }

    return <Navigate to={PrivateRoutes.Home} />;
  };

  if (isAuthenticating) {
    return (
      <Layout>
        <Loader />
      </Layout>
    );
  }

  return renderRoutes();
};
