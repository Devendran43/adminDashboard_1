import { Routes, Route } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Dashboard from '../features/dashboard/Dashboard'
import Users from '../features/users/Users'
import Orders from '../features/orders/Orders'
import Reports from '../features/reports/Reports'
import Settings from '../features/settings/Settings'
import About from '../features/about/About'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}
