import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import PeopleIcon from '@mui/icons-material/People'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SettingsIcon from '@mui/icons-material/Settings'
import InfoIcon from '@mui/icons-material/Info'
import { NavLink } from 'react-router-dom'

const drawerWidth = 240

export default function Sidebar() {
  const theme = useTheme()

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.background.paper, // 🔥 key
          borderRight: `1px solid ${theme.palette.divider}`, // 🔥 key
        },
      }}
    >
      <Box sx={{ p: 2, fontWeight: 600 }}>
        Admin Panel
      </Box>

      <List>
        <NavItem to="/" label="Dashboard" icon={<DashboardIcon />} />
        <NavItem to="/users" label="Users" icon={<PeopleIcon />} />
        <NavItem to="/orders" label="Orders" icon={<ShoppingCartIcon />} />
        <NavItem to="/settings" label="Settings" icon={<SettingsIcon />} />
        <NavItem to="/about" label="About" icon={<InfoIcon />} />
      </List>
    </Drawer>
  )
}

function NavItem({
  to,
  label,
  icon,
}: {
  to: string
  label: string
  icon: React.ReactNode
}) {
  return (
    <ListItemButton
      component={NavLink}
      to={to}
      sx={{
        color: 'text.primary', // 🔥 theme-driven
        '&.active': {
          backgroundColor: 'action.selected',
          fontWeight: 600,
        },
        '&:hover': {
          backgroundColor: 'action.hover',
        },
      }}
    >
      <ListItemIcon sx={{ color: 'text.primary' }}>
        {icon}
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  )
}
