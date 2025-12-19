import { Box, Divider, Grid, Typography, Link } from '@mui/material'

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 8,
        backgroundColor: 'rgba(255,255,255,0.02)', // 🔥 subtle contrast
        borderTop: '1px solid rgba(255,255,255,0.06)', // 🔥 clear separation
      }}
    >
      <Box px={4} py={5}>
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Company Name
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={1}>
              We provide scalable, secure, and high-performance digital solutions
              designed for modern businesses.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This admin dashboard acts as a reusable foundation for managing
              users, orders, reports, and system configurations.
            </Typography>
          </Grid>

          {/* Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Contact & Support
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email:{' '}
              <Link href="mailto:support@company.com">
                support@company.com
              </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Phone: +91 98765 43210
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Mon – Fri, 9:00 AM – 6:00 PM IST
            </Typography>
          </Grid>

          {/* Legal */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" fontWeight={600} mb={1}>
              Legal & Branches
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Branches: Chennai, Bangalore, Hyderabad
            </Typography>
            <Typography variant="body2" color="text.secondary" mt={1}>
              Licensed Software · Version 1.0.0
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.08 }} />

        <Box textAlign="center">
          <Typography variant="caption" color="text.secondary">
            © 2025 Company Name. All rights reserved.
          </Typography>
          <Typography variant="caption" color="text.secondary" display="block">
            Built with React, TypeScript, and Material UI
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
