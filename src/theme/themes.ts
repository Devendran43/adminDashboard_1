import { createTheme } from '@mui/material/styles'

/* ===== ORIGINAL DARK THEME (YOUR BRAND) ===== */
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#0B0F19',   // 🔥 original dashboard background
      paper: '#111827',     // 🔥 cards / sidebar
    },
    primary: {
      main: '#6366F1',      // indigo accent
    },
    text: {
      primary: '#FFFFFF',
      secondary: 'rgba(255,255,255,0.7)',
    },
    divider: 'rgba(255,255,255,0.08)',
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: 'none',
          color: '#FFFFFF',
        },
        columnHeaders: {
          color: 'rgba(255,255,255,0.85)',
        },
        cell: {
          color: '#FFFFFF',
        },
        row: {
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.05)',
          },
        },
      },
    },
  },
})

/* ===== LIGHT THEME ===== */
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#6366F1',
    },
    text: {
      primary: '#0F172A',
      secondary: '#475569',
    },
    divider: '#E5E7EB',
  },
})
