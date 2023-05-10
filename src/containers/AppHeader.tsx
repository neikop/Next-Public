import { Logout, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Chip, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import { AppBreadcrumb, SwitchTheme } from 'components';
import { AppMenu } from 'containers';
import { useWindowSize } from 'hooks';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { profileSelector, signOut } from 'reducers/profileSlice';
import { privateRoute } from 'routes';

const AppHeader = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isTablet } = useWindowSize();
  const { username } = useSelector(profileSelector);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClickLogout = () => {
    dispatch(signOut());
  };

  useEffect(() => {
    setOpenDrawer(false);
  }, [location]);

  return (
    <>
      <Drawer
        variant={isTablet ? 'temporary' : 'persistent'}
        anchor='left'
        open={isTablet ? openDrawer : true}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ style: { width: '320px', padding: '8px 16px' } }}
      >
        <div className='flex items-center justify-center gap-3 sm:py-[4px]'>
          <Link to={privateRoute.home.path}>
            <img src={require('assets/icons/Muragi.svg').default} className='h-[40px]' />
          </Link>
          <span className='text-2xl font-bold text-primary-main'>SF Office</span>
        </div>
        <Divider className='my-[8px]' />
        <AppMenu />
      </Drawer>

      <AppBar position='sticky' elevation={2} color='inherit'>
        <Toolbar>
          {isTablet && (
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <div className='flex-1'>
            <AppBreadcrumb />
          </div>

          <div className='flex items-center justify-end gap-2'>
            <SwitchTheme />
            <Chip className='font-bold' label={username} />
            <IconButton onClick={handleClickLogout}>
              <Logout />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppHeader;
