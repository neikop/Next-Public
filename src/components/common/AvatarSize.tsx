import { Avatar, AvatarProps, styled } from '@mui/material';

type AvatarSizeProps = AvatarProps & {
  sizes?: 'small' | 'medium' | 'large';
  size?: number;
};

const AvatarSize = styled(({ size, sizes, ...props }: AvatarSizeProps) => {
  return <Avatar {...props} />;
})(({ size, sizes }) => {
  if (sizes === 'small') size = 28;
  if (sizes === 'medium') size = 40;
  if (sizes === 'large') size = 48;
  return {
    width: size,
    height: size,
  };
});

export default AvatarSize;
