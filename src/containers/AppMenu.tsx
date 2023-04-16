import { ListItemButton, ListItemText, styled } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';

const StyledListItem = styled(ListItemButton)({
  borderRadius: 9999,
  padding: '4px 12px',
  '&.Mui-selected': {
    color: 'var(--color-primary-main) !important',
    backgroundColor: 'transparent',
  },
  '&:hover': {
    color: 'var(--color-primary-main) !important',
  },
});

const MenuItem = ({ path, name }: { path: string; name?: string }) => {
  const location = useLocation();
  const isHome = location.pathname === privateRoute.home.path;
  const isSelected = isHome ? location.pathname === path : location.pathname.startsWith(path);

  return (
    <Link to={path} className='rounded-full'>
      <StyledListItem selected={isSelected}>
        <ListItemText classes={{ primary: 'font-semibold' }}>{name}</ListItemText>
      </StyledListItem>
    </Link>
  );
};

const AppMenu = () => {
  return (
    <>
      <MenuItem {...privateRoute.home} />
      <MenuItem {...privateRoute.profile} />
    </>
  );
};

export default AppMenu;
