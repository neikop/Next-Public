import { Button, debounce, Grid, TextField } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';

type Props = SearchController & {
  items: {
    label: string;
    key: string;
  }[];
};

const CommonSearch = ({ items, onChange }: Props) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [params, setParams] = useState<Record<string, string>>({});

  const handleClickReset = () => {
    setValues({});
    setParams((params) =>
      Object.keys(params).reduce(
        (values, key) => ({
          ...values,
          [key]: undefined,
        }),
        {},
      ),
    );
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceChangeParams = useCallback(
    debounce((value) => {
      setParams((params) => ({ ...params, ...value }));
    }, 300),
    [],
  );

  useEffect(() => {
    onChange(params);
  }, [onChange, params]);

  return (
    <Grid container columnSpacing={3} className='flex-1'>
      {items.map((item) => (
        <Grid item key={item.key} sm={3}>
          <TextField
            fullWidth
            label={item.label}
            value={values[item.key] ?? ''}
            onChange={(event) => {
              setValues((values) => ({ ...values, [item.key]: event.target.value }));
              debounceChangeParams({ [item.key]: event.target.value });
            }}
          />
        </Grid>
      ))}

      <Grid item sm={3}>
        <Button variant='outlined' color='inherit' onClick={handleClickReset}>
          Clear
        </Button>
      </Grid>
    </Grid>
  );
};

export default CommonSearch;
