import { Box, Button, TextField, Typography } from '@mui/material'
import { useState } from 'react'

interface PasswordFormData {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export default function PasswordForm() {
  const [form, setForm] = useState<PasswordFormData>({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  })

  const handleChange =
    (field: keyof PasswordFormData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = () => {
    if (form.newPassword !== form.confirmPassword) {
      alert('Passwords do not match')
      return
    }

    // TODO: replace with API call
    console.log('Password changed')
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Change Password
      </Typography>

      <TextField
        label="Current Password"
        type="password"
        fullWidth
        sx={{ mb: 2 }}
        value={form.currentPassword}
        onChange={handleChange('currentPassword')}
      />

      <TextField
        label="New Password"
        type="password"
        fullWidth
        sx={{ mb: 2 }}
        value={form.newPassword}
        onChange={handleChange('newPassword')}
      />

      <TextField
        label="Confirm New Password"
        type="password"
        fullWidth
        value={form.confirmPassword}
        onChange={handleChange('confirmPassword')}
      />

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Change Password
      </Button>
    </Box>
  )
}
