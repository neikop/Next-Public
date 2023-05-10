import { Button } from '@mui/material';
import { enqueueSnackbar } from 'notistack';

const Home = () => {
  return (
    <div>
      <Button onClick={() => enqueueSnackbar('Hello')}>Alert</Button>
    </div>
  );
};

export default Home;
