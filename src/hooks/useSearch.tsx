import { GridSortModel } from '@mui/x-data-grid';
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

  const onSorterChange = useCallback((models: GridSortModel) => {
    const column = models[0];
    setDataSearch((current) => ({
      ...current,
      sortBy: column?.field,
      sortDirection: column?.sort?.toUpperCase(),
    }));
  }, []);

  return [dataSearch, onSearchChange, onSorterChange] as [
    CommonSearch,
    (search: CommonSearch) => void,
    (sorter: GridSortModel) => void,
  ];
};

export default useSearch;
