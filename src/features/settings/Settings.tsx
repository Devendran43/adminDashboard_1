import { Box, Card, Divider, Typography } from '@mui/material'
import ProfileForm from './ProfileForm'
import PasswordForm from './PasswordForm'

export default function Settings() {
  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Settings
      </Typography>

      <Card sx={{ p: 3, mb: 4 }}>
        <ProfileForm />
      </Card>

      <Divider sx={{ my: 4 }} />

      <Card sx={{ p: 3 }}>
        <PasswordForm />
      </Card>
    </Box>
  )
}
