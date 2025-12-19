import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SettingsIcon from '@mui/icons-material/Settings'
import InfoIcon from '@mui/icons-material/Info'

export const MENU_ITEMS = [
  { label: 'Dashboard', path: '/', icon: DashboardIcon },
  { label: 'Users', path: '/users', icon: PeopleIcon },
  { label: 'Orders', path: '/orders', icon: ShoppingCartIcon },
  { label: 'Reports', path: '/reports', icon: AssessmentIcon },
  { label: 'Settings', path: '/settings', icon: SettingsIcon },
  { label: 'About Us', path: '/about', icon: InfoIcon },
]
