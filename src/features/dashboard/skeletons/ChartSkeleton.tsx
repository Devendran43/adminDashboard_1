import { Card, Skeleton } from '@mui/material'

export default function ChartSkeleton() {
  return (
    <Card sx={{ p: 3 }}>
      <Skeleton width={160} />
      <Skeleton variant="rectangular" height={240} sx={{ mt: 2 }} />
    </Card>
  )
}
