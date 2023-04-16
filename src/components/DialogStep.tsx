import {
  CancelOutlined,
  CheckCircle,
  PlayCircleOutline,
  RadioButtonUnchecked,
  ReceiptLongOutlined,
} from '@mui/icons-material';
import { CircularProgress, IconButton, Tooltip } from '@mui/material';

const StatusIcon = ({ status }: { status: PopupStepStatus }) => {
  if (status === 'IDLE') {
    return <RadioButtonUnchecked sx={{ fontSize: 28 }} color='disabled' />;
  }
  if (status === 'LOADING' || status === 'TRYAGAIN') {
    return <CircularProgress size={24} sx={{ margin: '2px' }} />;
  }
  if (status === 'ERROR') {
    return <CancelOutlined sx={{ fontSize: 28 }} color='error' />;
  }
  if (status === 'SUCCESS') {
    return <CheckCircle sx={{ fontSize: 28, color: '#89C87B' }} />;
  }
  return null;
};

type Props = {
  info?: PopupStepInfo;
  action?: string;
  description?: string;
  onTryAgain?: () => void;
};

const DialogStep = ({ info, action, description, onTryAgain }: Props) => {
  const { status = 'IDLE', transactionHash } = info ?? {};

  return (
    <div className='mb-3 flex flex-row-reverse gap-1'>
      <div className='flex h-[32px] items-center justify-end'>
        {status === 'ERROR' && (
          <Tooltip title='Try Again' placement='left'>
            <IconButton size='small' color='primary' onClick={onTryAgain}>
              <PlayCircleOutline sx={{ fontSize: 28 }} />
            </IconButton>
          </Tooltip>
        )}
        {status === 'SUCCESS' && transactionHash && (
          <Tooltip title='View on Arbitrum scan' placement='left'>
            <a href={'/' + transactionHash} target='_blank'>
              <IconButton size='small' color='info'>
                <ReceiptLongOutlined sx={{ fontSize: 28 }} />
              </IconButton>
            </a>
          </Tooltip>
        )}
        <StatusIcon status={status} />
      </div>
      <div className='flex-1 py-[3px]'>
        <div className='font-medium'>{action}</div>
        <div className='text-sm text-neutral-secondary'>{description}</div>
      </div>
    </div>
  );
};

export default DialogStep;
