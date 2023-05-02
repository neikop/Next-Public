import { Avatar, AvatarProps, styled } from '@mui/material';
import { useMemo } from 'react';

type AvatarSizeProps = AvatarProps & {
  sizes?: 'small' | 'medium' | 'large';
  size?: number;
};

const AvatarSize = styled(({ size, sizes, ...props }: AvatarSizeProps) => {
  const [width, height] = useMemo(() => {
    if (sizes === 'small') return [32, 32];
    if (sizes === 'medium') return [40, 40];
    if (sizes === 'large') return [48, 48];
    return [size, size];
  }, [size, sizes]);
  return <Avatar sx={{ width, height }} {...props} />;
})();

export default AvatarSize;
