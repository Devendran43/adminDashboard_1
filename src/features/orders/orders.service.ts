import apiClient from '../../services/api.client'
import type { Order } from './orders.types'

export const ordersService = {
  async getOrders(): Promise<Order[]> {
    const response = await apiClient.get('/carts?limit=10')

    return response.data.carts.map((cart: any) => ({
      id: cart.id,
      orderId: `ORD-${cart.id}`,
      customer: `User ${cart.userId}`,
      amount: cart.total,
      status: 'Delivered', // dummy status
    }))
  },
}
