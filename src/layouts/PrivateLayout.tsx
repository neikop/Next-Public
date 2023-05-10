import { AppHeader } from 'containers';
import { useWindowSize } from 'hooks';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { profileSelector } from 'reducers/profileSlice';
import { authRoute, privateRoute } from 'routes';

const PrivateLayout = () => {
  const navigator = useNavigate();
  const { isTablet } = useWindowSize();
  const { isLoggedIn } = useSelector(profileSelector);

  useEffect(() => {
    if (!isLoggedIn) {
      navigator(authRoute.login.url, { replace: true });
    }
  }, [isLoggedIn, navigator]);

  return (
    <main style={isTablet ? {} : { marginLeft: '320px' }}>
      <AppHeader />
      <div className='p-6'>
        <Routes>
          {Object.values(privateRoute).map(({ path, component: Element }) => (
            <Route key={path} path={path} element={<Element />} />
          ))}
          <Route path='*' element={<Navigate to={privateRoute.home.path} />} />
        </Routes>
      </div>
    </main>
  );
};

export default PrivateLayout;
