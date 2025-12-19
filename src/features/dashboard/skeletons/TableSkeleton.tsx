import { Card, Skeleton } from '@mui/material'

export default function TableSkeleton() {
  return (
    <Card sx={{ p: 3 }}>
      <Skeleton width={140} />
      {[...Array(5)].map((_, i) => (
        <Skeleton key={i} height={40} sx={{ mt: 1 }} />
      ))}
    </Card>
  )
}
