import { Button, Container } from '@mui/material';
import { enqueueSnackbar } from 'notistack';

const Home = () => {
  return (
    <Container>
      <Button onClick={() => enqueueSnackbar('Hello')}>Alert</Button>
    </Container>
  );
};

export default Home;
