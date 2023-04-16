import { Logout, Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, Chip, Container, Divider, Drawer, IconButton, List, Paper, Toolbar } from '@mui/material';
import { AppMenu } from 'containers';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { profileSelector, signOut } from 'reducers/profileSlice';
import { privateRoute } from 'routes';

const AppHeader = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { username } = useSelector(profileSelector);

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleClickLogout = () => {
    dispatch(signOut({}));
  };

  useEffect(() => {
    setOpenDrawer(false);
  }, [location]);

  return (
    <>
      <Drawer
        variant='temporary'
        anchor='left'
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: 280, padding: '8px 16px' } }}
      >
        <div className='relative flex h-12 items-center justify-center lg:h-16'>
          <Link to={privateRoute.home.path}>
            <img src={require('assets/icons/Github.png')} alt='Logo' className='h-[40px]' />
          </Link>
        </div>
        <Divider className='my-2' />
        <List className='flex flex-col gap-1'>
          <AppMenu />
        </List>
      </Drawer>

      <AppBar position='sticky' color='transparent' elevation={0} className='bg-neutral-main'>
        <Toolbar component={Container} maxWidth='xl' className='flex items-center lg:py-4'>
          <IconButton className='lg:hidden' onClick={() => setOpenDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <div className='relative hidden min-w-[240px] lg:block'>
            <Link to={privateRoute.home.path}>
              <img src={require('assets/icons/Github.png')} alt='Logo' className='h-[40px]' />
            </Link>
          </div>

          <div className='flex flex-1 items-center justify-center'>
            <List component={Paper} className='hidden rounded-full px-3 lg:flex xl:gap-2'>
              <AppMenu />
            </List>
          </div>

          <div className='flex min-w-[240px] items-center justify-end gap-2'>
            <Chip className='font-semibold' label={username} />
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
