import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { CssBaseline, LinearProgress, PaletteMode, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { GridEmpty } from 'components/common';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { themeSelector } from 'reducers/themeSlice';

const createAppTheme = (mode?: PaletteMode) =>
  createTheme({
    components: {
      MuiContainer: {
        defaultProps: {
          maxWidth: 'lg',
        },
      },
      MuiButton: {
        defaultProps: {
          size: 'medium',
          variant: 'contained',
          color: 'primary',
          disableElevation: true,
        },
        styleOverrides: {
          sizeLarge: { minHeight: 48, minWidth: 48, fontSize: 18 },
          sizeMedium: { minHeight: 40, minWidth: 40, fontSize: 16 },
          sizeSmall: { minHeight: 32, minWidth: 32, fontSize: 14 },
        },
      },
      MuiTooltip: {
        defaultProps: {
          arrow: true,
        },
      },
      MuiPagination: {
        defaultProps: {
          variant: 'outlined',
          shape: 'rounded',
          size: 'large',
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          size: 'medium',
          InputLabelProps: { shrink: true },
        },
      },
      MuiDialog: {
        defaultProps: {
          maxWidth: 'sm',
          fullWidth: true,
        },
      },
      MuiDataGrid: {
        defaultProps: {
          disableColumnMenu: true,
          hideFooter: true,
          autoHeight: true,
          rowSelection: false,
          paginationMode: 'server',
          sortingMode: 'server',
          getRowHeight: () => 'auto',
          slots: {
            noRowsOverlay: GridEmpty,
            loadingOverlay: LinearProgress,
            columnSortedAscendingIcon: ArrowDropUp,
            columnSortedDescendingIcon: ArrowDropDown,
          },
          showCellVerticalBorder: true,
          showColumnVerticalBorder: true,
        },
      },
    },
    typography: {
      fontFamily: 'Nunito Sans',
      button: { fontWeight: 700, textTransform: 'none' },
    },
    palette: {
      primary: {
        main: '#3774B7',
      },
      secondary: {
        main: '#59A059',
      },
      mode,
    },
    shape: {
      borderRadius: 4,
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1600,
      },
    },
  });

type Props = {
  children: JSX.Element;
};

const AppTheme = ({ children }: Props) => {
  const { mode } = useSelector(themeSelector);

  useEffect(() => {
    document.body.dataset.theme = mode;
    document.body.className = mode;
  }, [mode]);

  return (
    <ThemeProvider theme={responsiveFontSizes(createAppTheme(mode))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
