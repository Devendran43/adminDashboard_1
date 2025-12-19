import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import ToastProvider from '../providers/ToastProvider'
import { ThemeModeProvider } from '../theme/ThemeContext'

// Main page
export default function App() {
  return (
    <ThemeModeProvider>
      <ToastProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ToastProvider>
    </ThemeModeProvider>
  )
}
