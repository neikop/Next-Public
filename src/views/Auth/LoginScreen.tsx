import { LoadingButton } from '@mui/lab';
import { Container, Paper, TextField } from '@mui/material';
import { useMutation } from '@tanstack/react-query';
import { InputPassword } from 'components/common';
import { enqueueSnackbar } from 'notistack';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from 'reducers/profileSlice';
import { authService } from 'services';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm({ mode: 'onChange' });

  const { mutate: login, isLoading } = useMutation(authService.login, {
    onSuccess: ({ token, ...info }) => {
      enqueueSnackbar('Login successfully');
      dispatch(
        signIn({
          accessToken: token,
          ...info,
        }),
      );
    },
  });

  const handleClickSubmit = () => {
    handleSubmit((values) => {
      login({
        ...(values as LoginBody),
      });
    })();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      handleClickSubmit();
    }
  };

  return (
    <Container maxWidth='sm'>
      <Paper className='space-y-6 p-6'>
        <div className='text-center text-2xl font-bold'>LoginScreen</div>

        <div className='flex flex-col items-center justify-center gap-6'>
          <Controller
            name='username'
            defaultValue='user@example.com'
            control={control}
            rules={{
              required: 'Username is required',
            }}
            render={({ field, fieldState: { error } }) => (
              <TextField {...field} fullWidth label='Username' error={!!error} helperText={error?.message} />
            )}
          />

          <Controller
            name='password'
            defaultValue='string'
            control={control}
            rules={{
              required: 'Password is required',
            }}
            render={({ field, fieldState: { error } }) => (
              <InputPassword
                {...field}
                fullWidth
                label='Password'
                onKeyDown={handleKeyDown}
                error={!!error}
                helperText={error?.message}
              />
            )}
          />

          <LoadingButton fullWidth variant='contained' loading={isLoading} onClick={handleClickSubmit}>
            Login
          </LoadingButton>
        </div>
      </Paper>
    </Container>
  );
};

export default LoginScreen;
