import { Box, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import DataTable from '../../components/DataTable/DataTable'
import type { GridColDef, GridFilterModel } from '@mui/x-data-grid'
import type { User } from './users.types'
import { usersService } from './users.service'
import UsersTableSkeleton from './skeletons/UsersTableSkeleton'
import { toast } from '../../utils/toast'

export default function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)
  const [filterModel, setFilterModel] = useState<GridFilterModel>({
    items: [],
  })

  const columns: GridColDef<User>[] = [
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1.5 },
    { field: 'role', headerName: 'Role', flex: 1 },
    { field: 'status', headerName: 'Status', flex: 1},
    { field: 'age', headerName: 'Age', flex: 1},
    { field: 'gender', headerName: 'Gender', flex: 1},
    { field: 'email', headerName: 'Email', flex: 1},
    { field: 'phone', headerName: 'Phone', flex: 1},
    { field: 'bloodGroup', headerName: 'BloodGroup', flex: 1},
    { field: 'height', headerName: 'Height', flex: 1},
    { field: 'weight', headerName: 'Weight', flex: 1},
    { field: 'university', headerName: 'university', flex: 1},




  ]

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await usersService.getUsers()
        setUsers(data)
      } catch {
        toast.error('Failed to load users')
      } finally {
        setLoading(false)
      }
    }

    loadUsers()
  }, [])

  const handleSearch = (value: string) => {
    setFilterModel({
      items: [
        { field: 'name', operator: 'contains', value },
        { field: 'email', operator: 'contains', value },
      ],
    })
  }

  return (
    <Box maxWidth={1400} mx="auto">
      <Typography variant="h4" fontWeight={600} mb={1}>
        Users
      </Typography>

      {/* Search */}
      <TextField
        placeholder="Search by name or email"
        size="small"
        sx={{ mb: 2, width: 300 }}
        onChange={e => handleSearch(e.target.value)}
      />

      {loading ? (
        <UsersTableSkeleton />
      ) : (
        <DataTable<User>
          rows={users}
          columns={columns}
          filterModel={filterModel}
          onFilterChange={setFilterModel}
        />
      )}
    </Box>
  )
}
