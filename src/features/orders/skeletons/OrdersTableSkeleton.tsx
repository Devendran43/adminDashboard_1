import { Card, Skeleton } from '@mui/material'

export default function OrdersTableSkeleton() {
  return (
    <Card sx={{ p: 3 }}>
      <Skeleton width={140} />
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} height={40} sx={{ mt: 1 }} />
      ))}
    </Card>
  )
}
