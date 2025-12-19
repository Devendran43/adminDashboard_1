import { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { darkTheme, lightTheme } from './themes'


type ThemeMode = 'dark' | 'light'

interface ThemeContextValue {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

export function useThemeMode() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeMode must be used within ThemeModeProvider')
  }
  return context
}

export function ThemeModeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [mode, setMode] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme') as ThemeMode | null
    if (saved) return saved
    return prefersDark ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    setMode(prev => {
      const next = prev === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', next)
      return next
    })
  }


const theme = useMemo(
  () => (mode === 'dark' ? darkTheme : lightTheme),
  [mode]
)

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}
