import { LoadingButton } from '@mui/lab';
import { DialogActions, DialogContent, DialogTitle, Grid, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { accountService, queryClient } from 'services';

type Props = PopupController & {
  item: AccountItem;
};

const PopupDeleteAccount = ({ item, onClose }: Props) => {
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const { mutate: deleteAccount, isLoading } = useMutation(accountService.deleteAccount, {
    onSuccess: () => {
      enqueueSnackbar('Delete account successfully');
      queryClient.invalidateQueries(['accountService.fetchAccounts']);
      onClose();
    },
  });

  const handleClickSubmit = () => {
    handleSubmit(() => {
      deleteAccount({
        id: item.id,
      });
    })();
  };

  return (
    <>
      <DialogTitle>Delete Account</DialogTitle>

      <DialogContent>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <Controller
              name='note'
              defaultValue=''
              control={control}
              render={({ field }) => (
                <TextField {...field} multiline minRows={2} fullWidth label='Note' placeholder='Delete permanently' />
              )}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions>
        <LoadingButton variant='outlined' color='inherit' onClick={onClose}>
          Cancel
        </LoadingButton>
        <LoadingButton variant='contained' color='error' loading={isLoading} onClick={handleClickSubmit}>
          Confirm
        </LoadingButton>
      </DialogActions>
    </>
  );
};

export default PopupDeleteAccount;
