import { Outlet } from 'react-router-dom'
import { Box } from '@mui/material'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Footer from './Footer/Footer'

export default function MainLayout() {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />

    <Box flex={1} p={3} sx={{ backgroundColor: 'background.default' }}>
        <Header />

        <Box flex={1} p={3}>
          <Outlet />
        </Box>

        <Footer />
      </Box>


    </Box>
  )
}
