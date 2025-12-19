export interface DashboardStats {
  totalUsers: number
  totalOrders: number
  newUsers: number
  satisfactionRate: number
}

export interface ChartPoint {
  label: string
  value: number
}

export interface Order {
  id: number
  orderId: string
  customer: string
  amount: number
  status: 'Delivered' | 'Pending' | 'Processing' | 'Cancelled'
}
