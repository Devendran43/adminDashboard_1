import { createTheme } from '@mui/material/styles'
import '@mui/x-data-grid/themeAugmentation'


const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0B0D14',
      paper: '#151826',
    },
    primary: {
      main: '#8B5CF6',
      light: '#A78BFA',
      dark: '#7C3AED',
    },
    secondary: {
      main: '#6366F1',
    },
    text: {
      primary: '#E5E7EB',
      secondary: '#9CA3AF',
      disabled: '#6B7280',
    },
    success: {
      main: '#22C55E',
    },
    warning: {
      main: '#FACC15',
    },
    error: {
      main: '#EF4444',
    },
    info: {
      main: '#38BDF8',
    },
    divider: 'rgba(255,255,255,0.06)',
  },

  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: { fontWeight: 600 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
    body1: {
      color: '#9CA3AF',
    },
    body2: {
      color: '#6B7280',
    },
  },

  shape: {
    borderRadius: 14,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          boxShadow: '0 10px 30px rgba(0,0,0,0.35)',
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 10,
          fontWeight: 500,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          backgroundColor: '#151826',
          color: '#FFFFFF',
        },
        columnHeaders: {
          backgroundColor: '#0F111A',
          color: '#ffffffff',
        },
      },
    },

    MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 6,
        margin: '4px 8px',
      },
    },
  },
  },
})

export default theme


