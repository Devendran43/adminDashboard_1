import { Card, Skeleton } from '@mui/material'

export default function DashboardStatsSkeleton() {
  return (
    <Card sx={{ p: 3 }}>
      <Skeleton width={80} />
      <Skeleton variant="text" height={40} />
      <Skeleton width={120} />
    </Card>
  )
}
