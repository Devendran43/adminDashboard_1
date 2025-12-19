import { Card, Skeleton } from '@mui/material'

export default function UsersTableSkeleton() {
  return (
    <Card sx={{ p: 3 }}>
      <Skeleton width={120} />
      {[...Array(6)].map((_, i) => (
        <Skeleton key={i} height={40} sx={{ mt: 1 }} />
      ))}
    </Card>
  )
}
