type PopupController = {
  onSuccess?: () => void;
  onClose: () => void;
};

type SearchController = {
  onChange: (...args: any) => void;
};

type Address = `0x${string}`;

type PopupStepStatus = 'IDLE' | 'LOADING' | 'ERROR' | 'TRYAGAIN' | 'SUCCESS';

type PopupStepInfo = {
  status: PopupStepStatus;
  transactionHash?: string;
};
