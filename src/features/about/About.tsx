import { Box, Card, Grid, Typography } from '@mui/material'

export default function About() {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        mx: 'auto',
        pb: 8, // 🔥 space before footer
      }}
    >
      <Typography variant="h4" fontWeight={600} mb={3}>
        About Us
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Who We Are
            </Typography>
            <Typography variant="body2" color="text.secondary">
              We build modern, scalable, and maintainable systems that help
              organizations manage operations efficiently.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Our Mission
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To simplify complex systems with clean architecture and intuitive
              user experience, enabling teams to focus on growth and delivery.
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ p: 3 }}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Platform Philosophy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This admin dashboard is designed as a reusable core system that can
              be adapted to multiple domains with minimal effort and maximum
              consistency.
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
