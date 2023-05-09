import { Box } from '@mui/material';
import { AppFooter, AppHeader } from 'containers';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { profileSelector } from 'reducers/profileSlice';
import { authRoute, privateRoute } from 'routes';

const PrivateLayout = () => {
  const navigator = useNavigate();
  const { isLoggedIn } = useSelector(profileSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigator(authRoute.login.url, { replace: true });
    }
  }, [isLoggedIn, navigator]);

  return (
    <main>
      <AppHeader />
      <Box
        sx={{
          minHeight: {
            lg: `calc(100vh - 64px - 88px)`,
            sm: `calc(100vh - 64px - 64px)`,
            xs: `calc(100vh - 56px - 56px)`,
          },
          padding: '24px 0',
        }}
      >
        <Routes>
          {Object.values(privateRoute).map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path='*' element={<Navigate to={privateRoute.home.path} />} />
        </Routes>
      </Box>
      <AppFooter />
    </main>
  );
};

export default PrivateLayout;
