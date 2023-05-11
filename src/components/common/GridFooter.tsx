import { Pagination } from '@mui/material';
import {
  GridFooterContainer,
  GridPagination,
  gridPageSelector,
  gridPageSizeSelector,
  gridRowCountSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

const GridPaginationSize = () => {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const rowCount = useGridSelector(apiRef, gridRowCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);

  return (
    <Pagination
      color='primary'
      shape='rounded'
      variant='outlined'
      classes={{ ul: 'pl-3 pr-6' }}
      count={Math.ceil(rowCount / pageSize)}
      page={page + 1}
      onChange={(event, value) => apiRef.current.setPage(value - 1)}
    />
  );
};

const GridFooter = () => {
  return (
    <GridFooterContainer>
      <GridPaginationSize />
      <GridPagination />
    </GridFooterContainer>
  );
};

export default GridFooter;
