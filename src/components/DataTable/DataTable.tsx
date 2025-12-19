import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import type {
  GridColDef,
  GridFilterModel,
} from '@mui/x-data-grid'

interface DataTableProps<T extends { id: number | string }> {
  rows: T[]
  columns: GridColDef<T>[]
  loading?: boolean
  height?: number

  /* NEW */
  filterModel?: GridFilterModel
  onFilterChange?: (model: GridFilterModel) => void
}

export default function DataTable<T extends { id: number | string }>({
  rows,
  columns,
  loading = false,
  height = 420,
  filterModel,
  onFilterChange,
}: DataTableProps<T>) {
  return (
    <Box sx={{ height, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        loading={loading}
        disableRowSelectionOnClick
        filterModel={filterModel}
        onFilterModelChange={onFilterChange}
      />
    </Box>
  )
}
