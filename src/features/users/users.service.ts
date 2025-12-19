import apiClient from '../../services/api.client'
import type { User } from './users.types'

export const usersService = {
  async getUsers(): Promise<User[]> {
    const response = await apiClient.get('/users?limit=10')

    return response.data.users.map((u: any) => ({
      id: u.id,
      name: `${u.firstName} ${u.lastName}`,
      email: u.email,
      role: u.role ?? 'User',
      status: u.isActive === false ? 'Inactive' : 'Active',
      age : u.age,
      gender : u.gender,
      phone : u.phone,
      bloodGroup : u.bloodGroup,    
      height : u.height,
      weight : u.weight,
      university : u.university  
    }))
  },
}
