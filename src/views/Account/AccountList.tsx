import { Add, DeleteOutline, EditOutlined, Refresh } from '@mui/icons-material';
import { Button, Dialog, Pagination, Paper, Switch } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useQuery } from '@tanstack/react-query';
import { CommonSearch } from 'components/common';
import { useSearch } from 'hooks';
import { useState } from 'react';
import { accountService } from 'services';
import { PopupCreateAccount, PopupDeleteAccount, PopupUpdateAccount } from './popups';

const AccountList = () => {
  const [dataSearch, onSearchChange, onSorterChange] = useSearch();

  const [openCreatePopup, setOpenCreatePopup] = useState(false);
  const [openUpdatePopup, setOpenUpdatePopup] = useState(false);
  const [openDeletePopup, setOpenDeletePopup] = useState(false);
  const [itemChoice, setItemChoice] = useState<AccountItem>();

  const { data, isFetching, refetch } = useQuery(
    ['accountService.fetchAccounts', dataSearch],
    () => accountService.fetchAccounts(dataSearch),
    { keepPreviousData: true },
  );
  const { items = [], total = 0 } = data ?? {};

  return (
    <>
      <div className='flex items-start justify-end gap-3'>
        <CommonSearch items={[{ label: 'Search', key: 'searchText' }]} onChange={onSearchChange} />

        <Button variant='contained' color='success' startIcon={<Add />} onClick={() => setOpenCreatePopup(true)}>
          Create Account
        </Button>
        <Button variant='outlined' color='primary' startIcon={<Refresh />} onClick={() => refetch()}>
          Refresh
        </Button>
      </div>

      <Paper elevation={0} className='my-6'>
        <DataGrid
          loading={isFetching}
          getRowId={(row) => row.username}
          rows={items}
          initialState={{
            sorting: {
              sortModel: [{ field: 'createdAt', sort: 'desc' }],
            },
          }}
          onSortModelChange={onSorterChange}
          columns={[
            {
              field: 'username',
              headerName: 'Username',
              flex: 1,
              minWidth: 240,
              sortable: false,
            },
            {
              field: 'isAdmin',
              headerName: 'Admin',
              sortable: false,
              minWidth: 160,
              renderCell: ({ row }) => (
                <div>
                  <Switch checked={row.isAdmin} />
                </div>
              ),
            },
            {
              field: 'createdAt',
              headerName: 'Created',
              minWidth: 160,
              renderCell: ({ row }) => <div>{row.createdAt}</div>,
            },
            {
              field: 'updatedAt',
              headerName: 'Updated',
              minWidth: 160,
              renderCell: ({ row }) => <div>{row.updatedAt}</div>,
            },
            {
              field: 'actions',
              headerName: '',
              sortable: false,
              minWidth: 160,
              renderCell: ({ row }) => (
                <div className='flex gap-3'>
                  <Button
                    size='medium'
                    variant='outlined'
                    onClick={() => {
                      setOpenUpdatePopup(true);
                      setItemChoice(row);
                    }}
                  >
                    <EditOutlined />
                  </Button>
                  <Button
                    variant='outlined'
                    color='error'
                    onClick={() => {
                      setOpenDeletePopup(true);
                      setItemChoice(row);
                    }}
                  >
                    <DeleteOutline />
                  </Button>
                </div>
              ),
            },
          ]}
        />
      </Paper>
      <div className='flex justify-center'>
        <Pagination
          page={dataSearch.page}
          count={Math.ceil(total / dataSearch.size!)}
          onChange={(event, value) => onSearchChange({ page: value })}
        />
      </div>

      <Dialog open={openCreatePopup}>
        <PopupCreateAccount onClose={() => setOpenCreatePopup(false)} />
      </Dialog>
      <Dialog open={openUpdatePopup}>
        <PopupUpdateAccount onClose={() => setOpenUpdatePopup(false)} item={itemChoice!} />
      </Dialog>
      <Dialog open={openDeletePopup} maxWidth='xs'>
        <PopupDeleteAccount onClose={() => setOpenDeletePopup(false)} item={itemChoice!} />
      </Dialog>
    </>
  );
};

export default AccountList;
