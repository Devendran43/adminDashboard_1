import apiClient from '../../services/api.client'
import type {
  DashboardStats,
  ChartPoint,
  Order,
} from './dashboard.types'

export const dashboardService = {
  async getStats(): Promise<DashboardStats> {
    // DummyJSON example
    const users = await apiClient.get('/users')
    const orders = await apiClient.get('/carts')

    return {
      totalUsers: users.data.total,
      totalOrders: orders.data.total,
      newUsers: 22,
      satisfactionRate: 89.9,
    }
  },

  async getChartData(): Promise<ChartPoint[]> {
    // Dummy chart data (replace later)
    return [
      { label: 'Mon', value: 40 },
      { label: 'Tue', value: 30 },
      { label: 'Wed', value: 20 },
      { label: 'Thu', value: 27 },
      { label: 'Fri', value: 50 },
      { label: 'Sat', value: 35 },
      { label: 'Sun', value: 45 },
      { label: 'Others', value: 80 }

    ]
  },

  async getRecentOrders(): Promise<Order[]> {
    const response = await apiClient.get('/carts?limit=50')

    return response.data.carts.map((cart: any) => ({
      id: cart.id,
      orderId: `ORD-${cart.id}`,
      customer: `User ${cart.userId}`,
      amount: cart.total,
      status: 'Delivered',
      totalProducts : cart.totalProducts,
      totalQuantity : cart.totalQuantity,
      discountedTotal : cart.discountedTotal
    }))
  },
}
