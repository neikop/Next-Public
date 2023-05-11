import { LoadingButton } from '@mui/lab';
import { DialogActions, DialogContent, DialogTitle, FormControlLabel, Grid, Switch, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { profileSelector } from 'reducers/profileSlice';
import { accountService, queryClient } from 'services';

type Props = PopupController & {
  item: AccountItem;
};

const PopupUpdateAccount = ({ item: account, onClose }: Props) => {
  const { id } = useSelector(profileSelector);
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const { mutate: updateAccount, isLoading } = useMutation(accountService.updateAccount, {
    onSuccess: () => {
      enqueueSnackbar('Update account successfully');
      queryClient.invalidateQueries(['accountService.fetchAccounts']);
      onClose();
    },
  });

  const handleClickSubmit = () => {
    handleSubmit((values) => {
      if (values.password.trim() === '') {
        delete values.password;
      }
      updateAccount({
        ...(values as AccountUpdateBody),
        id: account.id,
        creator: id!,
        accountInfo: 0,
      });
    })();
  };

  return (
    <>
      <DialogTitle>Update Account</DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Controller
              name='username'
              defaultValue={account.username}
              control={control}
              render={({ field }) => <TextField {...field} fullWidth label='Username' />}
            />
          </Grid>

          <Grid item sm={12}>
            <Controller
              name='password'
              defaultValue=''
              control={control}
              render={({ field }) => <TextField {...field} fullWidth label='Password' />}
            />
          </Grid>

          <Grid item sm={6}>
            <Controller
              name='isAdmin'
              defaultValue={account.isAdmin}
              control={control}
              render={({ field: { value, onChange } }) => (
                <FormControlLabel
                  label='Admin'
                  className='pl-2'
                  control={
                    <Switch checked={value} onChange={(event, checked) => onChange({ target: { value: checked } })} />
                  }
                />
              )}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <LoadingButton variant='outlined' color='inherit' onClick={onClose}>
          Cancel
        </LoadingButton>
        <LoadingButton variant='contained' color='secondary' loading={isLoading} onClick={handleClickSubmit}>
          Update
        </LoadingButton>
      </DialogActions>
    </>
  );
};

export default PopupUpdateAccount;
