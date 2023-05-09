import { LoadingButton } from '@mui/lab';
import { Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Container className='space-y-10 py-10'>
      <div className='text-[black] dark:text-[white]'>Toggle dark mode by Tailwindcss</div>
      <div className='flex gap-3'>
        <LoadingButton variant='contained' color='primary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='contained' color='primary'>
          Idle
        </LoadingButton>
        <Button variant='contained' color='primary' disabled>
          Disabled
        </Button>

        <LoadingButton variant='contained' color='secondary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='contained' color='secondary'>
          Idle
        </LoadingButton>
        <Button variant='contained' color='secondary' disabled>
          Disabled
        </Button>
      </div>

      <div className='flex gap-3'>
        <LoadingButton variant='outlined' color='primary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='outlined' color='primary'>
          Idle
        </LoadingButton>
        <Button variant='outlined' color='primary' disabled>
          Disabled
        </Button>

        <LoadingButton variant='outlined' color='secondary' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='outlined' color='secondary'>
          Idle{' '}
        </LoadingButton>
        <Button variant='outlined' color='secondary' disabled>
          Disabled
        </Button>
      </div>

      <div className='flex gap-3'>
        <LoadingButton variant='contained' color='inherit' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='contained' color='inherit'>
          Idle
        </LoadingButton>
        <Button variant='contained' color='inherit' disabled>
          Disabled
        </Button>

        <LoadingButton variant='outlined' color='inherit' loading>
          Spinning
        </LoadingButton>
        <LoadingButton variant='outlined' color='inherit'>
          Idle
        </LoadingButton>
        <Button variant='outlined' color='inherit' disabled>
          Disabled
        </Button>
      </div>
    </Container>
  );
};

export default Home;
