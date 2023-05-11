import { Close } from '@mui/icons-material';
import { IconButton, IconButtonProps, styled } from '@mui/material';

const DialogClose = styled((props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <Close />
    </IconButton>
  );
})(() => ({
  position: 'absolute',
  top: 16,
  right: 16,
}));

export default DialogClose;
