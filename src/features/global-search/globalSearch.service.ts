import apiClient from '../../services/api.client'
import type { SearchResult } from './globalSearch.types'

export const globalSearchService = {
  async search(query: string): Promise<SearchResult[]> {
    if (!query) return []

    try {
           /* ---- Pages ---- */
        const pages = [
        { id: 'dashboard', label: 'Dashboard', type: 'page' as const, route: '/' },
        { id: 'users', label: 'Users', type: 'page' as const, route: '/users' },
        { id: 'orders', label: 'Orders', type: 'page' as const, route: '/orders' },
        { id: 'reports', label: 'Reports', type: 'page' as const, route: '/reports' },
        { id: 'settings', label: 'Settings', type: 'page' as const, route: '/settings' },
        ].filter(p =>
        p.label.toLowerCase().includes(query.toLowerCase())
        )

        /* ---- Users ---- */
        const usersRes = await apiClient.get(`/users/search?q=${query}`)
        console.log('Users search result:', usersRes.data.users)

        const users: SearchResult[] = usersRes.data.users.map((u: any) => ({
        id: `user-${u.id}`,
        label: `${u.firstName} ${u.lastName}`,
        subLabel: u.email,
        type: 'user' as const,     // 🔥 IMPORTANT
        route: `/users/${u.id}`,
        }))

        /* ---- Orders ---- */
        const ordersRes = await apiClient.get(`/carts?limit=5`)
        const orders: SearchResult[] = ordersRes.data.carts
        .filter((c: any) => String(c.id).includes(query))
        .map((c: any) => ({
            id: `order-${c.id}`,
            label: `ORD-${c.id}`,
            subLabel: `User ${c.userId}`,
            type: 'order' as const,   // 🔥 IMPORTANT
            route: `/orders/${c.id}`,
        }))

        return [...pages, ...users, ...orders]

        }catch(error){
            console.error('Global search error:', error)
            return []
        }

  },
}


