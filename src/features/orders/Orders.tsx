import { Box, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import DataTable from '../../components/DataTable/DataTable'
import type { GridColDef, GridFilterModel } from '@mui/x-data-grid'
import type { Order } from './orders.types'
import { ordersService } from './orders.service'
import OrdersTableSkeleton from './skeletons/OrdersTableSkeleton'
import { toast } from '../../utils/toast'

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  })

  const columns: GridColDef<Order>[] = [
    { field: 'orderId', headerName: 'Order ID', flex: 1 },
    { field: 'customer', headerName: 'Customer', flex: 1.2 },
    { field: 'amount', headerName: 'Amount', type: 'number', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
      { field: 'orderId', headerName: 'Order ID', flex: 1 },
    { field: 'customer', headerName: 'Customer', flex: 1.2 },
    { field: 'amount', headerName: 'Amount', type: 'number', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },
      { field: 'orderId', headerName: 'Order ID', flex: 1 },
    { field: 'customer', headerName: 'Customer', flex: 1.2 },
    { field: 'amount', headerName: 'Amount', type: 'number', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1 },

  ]

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await ordersService.getOrders()
        setOrders(data)
      } catch {
        toast.error('Failed to load orders')
      } finally {
        setLoading(false)
      }
    }

    loadOrders()
  }, [])

  const handleSearch = (value: string) => {
    setFilterModel({
      items: [
        { field: 'orderId', operator: 'contains', value },
        { field: 'customer', operator: 'contains', value },
      ],
    })
  }

  return (
    <Box maxWidth={1400} mx="auto">
      <Typography variant="h4" fontWeight={600} mb={1}>
        Orders
      </Typography>

      {/* Search */}
      <TextField
        placeholder="Search by order ID or customer"
        size="small"
        sx={{ mb: 2, width: 300 }}
        onChange={e => handleSearch(e.target.value)}
      />

      {loading ? (
        <OrdersTableSkeleton />
      ) : (
        <DataTable<Order>
          rows={orders}
          columns={columns}
          filterModel={filterModel}
          onFilterChange={setFilterModel}
        />
      )}
    </Box>
  )
}
