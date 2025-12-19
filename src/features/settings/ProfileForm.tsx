import { Box, Button, Grid, MenuItem, TextField, Typography } from '@mui/material'
import { useState } from 'react'

interface ProfileFormData {
  name: string
  email: string
  gender: 'Male' | 'Female' | 'Other'
  mobile: string
}

export default function ProfileForm() {
  const [form, setForm] = useState<ProfileFormData>({
    name: 'Admin User',
    email: 'admin@company.com',
    gender: 'Male',
    mobile: '9876543210',
  })

  const handleChange =
    (field: keyof ProfileFormData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm(prev => ({ ...prev, [field]: event.target.value }))
    }

  const handleSubmit = () => {
    // TODO: replace with API call
    console.log('Profile updated:', form)
  }

  return (
    <Box>
      <Typography variant="h6" fontWeight={600} mb={2}>
        Profile Details
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField
            label="Name"
            fullWidth
            value={form.name}
            onChange={handleChange('name')}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            fullWidth
            disabled
            value={form.email}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Gender"
            select
            fullWidth
            value={form.gender}
            onChange={handleChange('gender')}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </TextField>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Mobile"
            fullWidth
            value={form.mobile}
            onChange={handleChange('mobile')}
          />
        </Grid>
      </Grid>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={handleSubmit}
      >
        Update Profile
      </Button>
    </Box>
  )
}
