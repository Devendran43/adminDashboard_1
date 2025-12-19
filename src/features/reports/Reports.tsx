import { Box, Button, MenuItem, Select, Typography, Card } from '@mui/material'
import { useState } from 'react'
import ColumnSelector from '../../components/Reports/ColumnSelector'
import { exportToExcel } from '../../utils/exportToExcel'


/* ------------------ Dummy Data ------------------ */

const userRows = [
  { id: 1, name: 'John', email: 'john@mail.com', role: 'Admin' },
  { id: 2, name: 'Jane', email: 'jane@mail.com', role: 'User' },
]
const orderRows = [
  { id: 1, orderId: 'ORD-1001', customer: 'John', amount: 1200 },
  { id: 2, orderId: 'ORD-1002', customer: 'Jane', amount: 860 },
]

const userColumns: { field: keyof UserRow; headerName: string }[] = [
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email' },
  { field: 'role', headerName: 'Role' },
]

const orderColumns: { field: keyof OrderRow; headerName: string }[] = [
  { field: 'orderId', headerName: 'Order ID' },
  { field: 'customer', headerName: 'Customer' },
  { field: 'amount', headerName: 'Amount' },
]



interface UserRow {
  id: number
  name: string
  email: string
  role: string
}

interface OrderRow {
  id: number
  orderId: string
  customer: string
  amount: number
}


/* ------------------------------------------------ */
type ReportType = 'users' | 'orders'

export default function Reports() {
  const [type, setType] = useState<ReportType>('users')

  const [selectedFields, setSelectedFields] = useState<string[]>(
    userColumns.map(c => c.field)
  )

 const handleExport = () => {
  if (type === 'users') {
    const selectedColumns = userColumns.filter(col =>
      selectedFields.includes(col.field)
    )

    exportToExcel<UserRow>(
      userRows,
      selectedColumns,
      'users-report'
    )
  } else {
    const selectedColumns = orderColumns.filter(col =>
      selectedFields.includes(col.field)
    )

    exportToExcel<OrderRow>(
      orderRows,
      selectedColumns,
      'orders-report'
    )
  }
}

const columns = type === 'users' ? userColumns : orderColumns
// const rows = type === 'users' ? userRows : orderRows


  return (
    <Box>
      <Typography variant="h4" fontWeight={600} mb={3}>
        Reports
      </Typography>

      <Card sx={{ p: 3, maxWidth: 500 }}>
        <Typography fontWeight={500} mb={2}>
          Export Data
        </Typography>

        {/* Select Report Type */}
        <Select
          fullWidth
          value={type}
          onChange={e => {
            const newType = e.target.value as ReportType
            setType(newType)
            setSelectedFields(
              (newType === 'users' ? userColumns : orderColumns).map(
                c => c.field
              )
            )
          }}
          sx={{ mb: 2 }}
        >
          <MenuItem value="users">Users</MenuItem>
          <MenuItem value="orders">Orders</MenuItem>
        </Select>

        {/* Column Selector */}
        <ColumnSelector
          columns={columns}
          selected={selectedFields}
          onChange={setSelectedFields}
        />

        {/* Export Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          disabled={selectedFields.length === 0}
          onClick={handleExport}
        >
          Export to Excel
        </Button>
      </Card>
    </Box>
  )
}
