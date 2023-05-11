import { DirectionsRun, Search } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { Button, Container } from '@mui/material';
import { AvatarSize } from 'components/common';
import { useState } from 'react';

const Components = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container className='space-y-10'>
      <div className='flex items-end gap-3'>
        <AvatarSize />
        <AvatarSize sizes='small' />
      </div>
      <div className='dark:text-[white]'>
        <span>Toggle dark mode by Tailwindcss</span>
        <LoadingButton
          startIcon={<Search />}
          loading={isLoading}
          onClick={() => {
            setIsLoading((loading) => !loading);
            setTimeout(() => {
              setIsLoading((loading) => !loading);
            }, 1000);
          }}
        >
          Click to Loading
        </LoadingButton>
      </div>
      <div className='flex gap-3'>
        <LoadingButton variant='contained' color='primary' startIcon={<DirectionsRun />} loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='contained' color='primary' startIcon={<DirectionsRun />}>
          Idle
        </LoadingButton>
        <Button variant='contained' color='primary' disabled startIcon={<DirectionsRun />}>
          Disabled
        </Button>

        <LoadingButton variant='contained' color='secondary' loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='contained' color='secondary'>
          Idle
        </LoadingButton>
        <Button variant='contained' color='secondary' disabled>
          Disabled
        </Button>

        <LoadingButton variant='contained' color='inherit' loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='contained' color='inherit'>
          Idle
        </LoadingButton>
        <Button variant='contained' color='inherit' disabled>
          Disabled
        </Button>
      </div>

      <div className='flex gap-3'>
        <LoadingButton variant='outlined' color='primary' startIcon={<DirectionsRun />} loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='outlined' color='primary' startIcon={<DirectionsRun />}>
          Idle
        </LoadingButton>
        <Button variant='outlined' color='primary' startIcon={<DirectionsRun />} disabled={true}>
          Disabled
        </Button>

        <LoadingButton variant='outlined' color='secondary' loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='outlined' color='secondary'>
          Idle
        </LoadingButton>
        <Button variant='outlined' color='secondary' disabled={true}>
          Disabled
        </Button>

        <LoadingButton variant='outlined' color='inherit' loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='outlined' color='inherit'>
          Idle
        </LoadingButton>
        <Button variant='outlined' color='inherit' disabled={true}>
          Disabled
        </Button>
      </div>

      <div className='flex gap-3'>
        <LoadingButton variant='text' color='primary' startIcon={<DirectionsRun />} loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='text' color='primary' startIcon={<DirectionsRun />}>
          Idle
        </LoadingButton>
        <Button variant='text' color='primary' startIcon={<DirectionsRun />} disabled={true}>
          Disabled
        </Button>

        <LoadingButton variant='text' color='secondary' loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='text' color='secondary'>
          Idle
        </LoadingButton>
        <Button variant='text' color='secondary' disabled={true}>
          Disabled
        </Button>

        <LoadingButton variant='text' color='inherit' loading={isLoading}>
          Action
        </LoadingButton>
        <LoadingButton variant='text' color='inherit'>
          Idle
        </LoadingButton>
        <Button variant='text' color='inherit' disabled={true}>
          Disabled
        </Button>
      </div>
    </Container>
  );
};

export default Components;
