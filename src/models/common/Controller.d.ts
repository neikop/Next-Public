type PopupController = {
  onSuccess?: () => void;
  onClose: () => void;
};

type SearchController = {
  onChange: (search?: CommonSearch) => void;
};
