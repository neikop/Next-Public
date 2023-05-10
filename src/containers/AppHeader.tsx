import { Logout } from '@mui/icons-material';
import { AppBar, Chip, Container, IconButton, List, Paper, Toolbar } from '@mui/material';
import { SwitchTheme } from 'components';
import { AppMenu } from 'containers';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { profileSelector, signOut } from 'reducers/profileSlice';
import { privateRoute } from 'routes';

const AppHeader = () => {
  const dispatch = useDispatch();
  const { username } = useSelector(profileSelector);

  const handleClickLogout = () => {
    dispatch(signOut());
  };

  return (
    <AppBar position='sticky' color='transparent' elevation={0} className='bg-paper-main'>
      <Toolbar component={Container} maxWidth='xl' className='flex items-center'>
        <div className='min-w-[240px]'>
          <Link to={privateRoute.home.path}>
            <img src={require('assets/icons/Github.png')} alt='Logo' className='h-[40px]' />
          </Link>
        </div>

        <div className='flex flex-1 items-center justify-center py-3'>
          <List component={Paper} className='flex gap-2 rounded-full px-3'>
            <AppMenu />
          </List>
        </div>

        <div className='flex min-w-[240px] items-center justify-end gap-2'>
          <SwitchTheme />
          <Chip className='font-bold' label={username} />
          <IconButton onClick={handleClickLogout}>
            <Logout />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
