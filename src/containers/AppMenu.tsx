import { ArrowDropDown, ArrowRight } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemText, styled } from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { privateRoute } from 'routes';

const StyledListItem = styled(ListItemButton)({
  borderRadius: 16,
  marginBottom: 8,
  '&.MuiListItemButton-root.Mui-selected': {
    backgroundColor: 'var(--color-primary-200)',
  },
  '&.MuiListItemButton-root:hover': {
    backgroundColor: 'var(--color-primary-300)',
  },
  '.MuiListItemText-primary': {
    fontWeight: 700,
  },
});

type SubMenuType = {
  name?: string | JSX.Element;
  path: string;
};

type MenuItemProps = {
  name?: string | JSX.Element;
  path: string;
  items?: SubMenuType[];
};

const MenuItem = ({ path, name, items }: MenuItemProps) => {
  const location = useLocation();
  const [open, setOpen] = useState(location.pathname.startsWith(path));

  const isHome = location.pathname === privateRoute.home.path;
  const isContain = location.pathname.startsWith(path);
  const isSelected = isHome ? isContain : location.pathname === path;

  return (
    <>
      {items ? (
        <StyledListItem selected={isContain} onClick={() => setOpen(!open)}>
          <ListItemText>{name}</ListItemText>
          {!open ? <ArrowRight /> : <ArrowDropDown />}
        </StyledListItem>
      ) : (
        <Link to={path}>
          <StyledListItem selected={isSelected}>
            <ListItemText>{name}</ListItemText>
          </StyledListItem>
        </Link>
      )}

      {items && (
        <Collapse in={open}>
          <List
            className='ml-3 py-0'
            sx={{
              '.MuiListItemButton-root': { padding: '4px 16px' },
            }}
          >
            {items?.map((sub, index) => (
              <MenuItem key={index} {...sub} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

const AppMenu = () => {
  return (
    <List className='flex flex-col'>
      <MenuItem {...privateRoute.home} />
      <MenuItem {...privateRoute.profile} />
      <MenuItem {...privateRoute.components} items={[privateRoute.componentsButton]} />
      <MenuItem {...privateRoute.buildings} />
    </List>
  );
};

export default AppMenu;
