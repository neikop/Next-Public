import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { CssBaseline, LinearProgress, ThemeProvider } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { GridEmpty } from 'components';

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
    MuiButton: {
      defaultProps: {
        size: 'large',
        variant: 'contained',
        color: 'primary',
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: { minHeight: 48, minWidth: 48 },
        sizeMedium: { minHeight: 40, minWidth: 40 },
        sizeSmall: { minHeight: 32, minWidth: 32 },
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
        autoHeight: true,
        disableColumnMenu: true,
        hideFooter: true,
        rowSelection: false,
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
    fontFamily: 'Montserrat',
    button: { fontWeight: 600, textTransform: 'none' },
    subtitle1: { fontSize: 16, lineHeight: 1.5 },
    subtitle2: { fontSize: 14, lineHeight: 1.43 },
    body1: { fontSize: 16 },
    body2: { fontSize: 14 },
    caption: { fontSize: 12 },
  },
  palette: {
    primary: {
      main: '#4a3cff',
    },
    secondary: {
      main: '#603bff',
    },
    mode: 'light',
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1400,
      xl: 1600,
    },
  },
});

type Props = {
  children: JSX.Element;
};

const AppTheme = ({ children }: Props) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
