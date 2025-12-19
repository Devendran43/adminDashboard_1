import { Box, Card, Typography } from '@mui/material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'

interface MetricCardProps {
  title: string
  value: string | number
  change: string
  positive?: boolean
}

export default function MetricCard({
  title,
  value,
  change,
  positive = true,
}: MetricCardProps) {
  return (
    <Card  sx={{
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
      <Typography variant="body2" color="text.secondary">
        {title}
      </Typography>

      <Typography variant="h4" fontWeight={600} mt={1}>
        {value}
      </Typography>

      <Box display="flex" alignItems="center" gap={0.5} mt={1}>
        {positive ? (
          <TrendingUpIcon fontSize="small" color="success" />
        ) : (
          <TrendingDownIcon fontSize="small" color="error" />
        )}
        <Typography
          variant="caption"
          color={positive ? 'success.main' : 'error.main'}
        >
          {change}
        </Typography>
      </Box>
    </Card>
  )
}
