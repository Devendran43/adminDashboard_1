export interface Order {
  id: number
  orderId: string
  customer: string
  amount: number
  status: 'Delivered' | 'Pending' | 'Processing' | 'Cancelled'
}
