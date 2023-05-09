import { Button, Container, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signIn } from 'reducers/profileSlice';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleClickLogin = () => {
    dispatch(
      signIn({
        username: 'Mirana',
      }),
    );
  };

  return (
    <Container maxWidth='sm'>
      <Paper className='space-y-6 p-6'>
        <h4 className='text-center text-3xl font-medium'>LoginScreen</h4>

        <div className='flex flex-col items-center justify-center gap-6'>
          <Button onClick={handleClickLogin} className='px-20'>
            Login
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

export default LoginScreen;
