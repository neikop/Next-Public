import { GridPaginationModel, GridSortModel } from '@mui/x-data-grid';
import { useCallback, useState } from 'react';

type CommonSearch = {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: SortDirectionType;
  searchText?: string;
  [key: string]: any;
};

const useSearch = (search?: CommonSearch) => {
  const [dataSearch, setDataSearch] = useState<CommonSearch>({
    page: 1,
    size: 10,
    sortBy: 'createdAt',
    sortDirection: 'DESC',
    ...search,
  });

  const onSearchChange = useCallback((search?: CommonSearch) => {
    setDataSearch((current) => ({
      ...current,
      page: 1,
      ...search,
    }));
  }, []);

  const onSortChange = useCallback((models: GridSortModel) => {
    const column = models[0];
    setDataSearch((current) => ({
      ...current,
      sortBy: column?.field,
      sortDirection: column?.sort?.toUpperCase(),
    }));
  }, []);

  const onPaginationChange = useCallback((models: GridPaginationModel) => {
    setDataSearch((current) => ({
      ...current,
      page: models.page + 1,
      size: models.pageSize,
    }));
  }, []);

  return { dataSearch, onSearchChange, onSortChange, onPaginationChange };
};

export default useSearch;
