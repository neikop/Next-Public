type SortDirectionType = 'ASC' | 'DESC';

type PaginateParams = {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: SortDirectionType;
  searchText?: string;
};

type PaginateResponse<T> = {
  items: T[];
  page: number;
  size: number;
  total: number;
};
