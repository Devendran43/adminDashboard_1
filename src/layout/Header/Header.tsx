import {
  Box,
  IconButton,
  Stack,
  Typography,
  Button,
  Divider,
  Tooltip,
} from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { useThemeMode } from '../../theme/ThemeContext'
import GlobalSearch from '../../features/global-search/GlobalSearch'

export default function Header() {
  const { mode, toggleTheme } = useThemeMode()
  const navigate = useNavigate()

  return (
    <Box mb={3}>
      {/* Top Row */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        px={3}
        py={2}
      >
        {/* Global Search */}
        <GlobalSearch />

        {/* Right Actions */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {dayjs().format('DD MMM YYYY, hh:mm A')}
          </Typography>

          {/* Theme Toggle */}
          <Tooltip title="Toggle theme">
            <IconButton onClick={toggleTheme}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          {/* Settings */}
          <Tooltip title="Settings">
            <IconButton onClick={() => navigate('/settings')}>
              <SettingsIcon />
            </IconButton>
          </Tooltip>
        </Stack>
      </Box>

      <Divider sx={{ opacity: 0.06 }} />

      {/* Second Row */}
      <Box
        display="flex"
        justifyContent="flex-end"
        alignItems="center"
        px={3}
        py={2}
      >
        <Button
          variant="contained"
          startIcon={<AutoAwesomeIcon />}
          sx={{
            borderRadius: 3,
            px: 3,
            background:
              'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
          }}
        >
          AI Assistant
        </Button>
      </Box>
    </Box>
  )
}
