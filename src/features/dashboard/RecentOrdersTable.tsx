import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import type { GridColDef } from '@mui/x-data-grid'
import type { Order } from './dashboard.types'


interface OrderRow {
  id: number
  orderId: string
  customer: string
  amount: number
  status: string
}

// const rows: OrderRow[] = [
//   { id: 1, orderId: 'ORD-1001', customer: 'John Doe', amount: 1200, status: 'Delivered' },
//   { id: 2, orderId: 'ORD-1002', customer: 'Jane Smith', amount: 860, status: 'Pending' },
//   { id: 3, orderId: 'ORD-1003', customer: 'Robert Fox', amount: 430, status: 'Cancelled' },
//   { id: 4, orderId: 'ORD-1004', customer: 'Emily Clark', amount: 2140, status: 'Delivered' },
//   { id: 5, orderId: 'ORD-1005', customer: 'Michael Lee', amount: 980, status: 'Processing' },
// ]

const columns: GridColDef<OrderRow>[] = [
  { field: 'orderId', headerName: 'Order ID', flex: 1 },
  { field: 'customer', headerName: 'Customer', flex: 1.2 },
  { field: 'amount', headerName: 'Amount', type: 'number', flex: 1},
  { field: 'status', headerName: 'Status', flex: 1 },
  { field: 'discountedTotal', headerName: 'Discount', flex: 1 },
  { field: 'totalProducts', headerName: 'Total Product', flex: 1 },
  { field: 'totalQuantity', headerName: 'Total Quantity', flex: 1 },
  { field: 'orderId', headerName: 'Order ID', flex: 1 },
  { field: 'customer', headerName: 'Customer', flex: 1.2 },
  { field: 'amount', headerName: 'Amount', type: 'number', flex: 1},
  { field: 'status', headerName: 'Status', flex: 1 },
  


]

export default function RecentOrdersTable({
  rows,
}: {
  rows: Order[]
}) {
  return (
    <Box>
      <Typography fontWeight={500} mb={2}>
        Recent Orders
      </Typography>

      {/* DataGrid container controls height */}
      <Box sx={{ height: 360, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          disableRowSelectionOnClick
          pageSizeOptions={[5]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 5, page: 0 },
            },
          }}
        />
      </Box>
    </Box>
  )
}
