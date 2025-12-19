import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import MetricCard from '../../components/Cards/MetricCard'
import PerformanceBarChart from '../../components/Charts/BarChart'
import AttendanceDonutChart from '../../components/Charts/DonutChart'
import RecentOrdersTable from './RecentOrdersTable'
import { dashboardService } from './dashboard.service'
import type { DashboardStats, ChartPoint, Order } from './dashboard.types'
import DashboardStatsSkeleton from './skeletons/DashboardStatsSkeleton'
import ChartSkeleton from './skeletons/ChartSkeleton'
import TableSkeleton from './skeletons/TableSkeleton'
import { toast } from '../../utils/toast'

export default function Dashboard() {
  const [stats, setStats] = useState<DashboardStats | null>(null)
  const [chartData, setChartData] = useState<ChartPoint[]>([])
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const [statsRes, chartRes, ordersRes] = await Promise.all([
          dashboardService.getStats(),
          dashboardService.getChartData(),
          dashboardService.getRecentOrders(),
        ])

        setStats(statsRes)
        setChartData(chartRes)
        setOrders(ordersRes)
      } catch {
        toast.error('Failed to load dashboard data')
      } finally {
        setLoading(false)
      }
    }

    loadDashboard()
  }, [])

  return (
    <Box maxWidth={1400} mx="auto">
      <Typography variant="h4" fontWeight={600} mb={1}>
        Dashboard
      </Typography>
      <Typography variant="body2" color="text.secondary" mb={4}>
        Overview of system activity and performance
      </Typography>

      {/* KPI Section */}
      <Grid container spacing={3} mb={5}>
        {(loading || !stats)
          ? [...Array(4)].map((_, i) => (
              <Grid item xs={12} md={3} key={i}>
                <DashboardStatsSkeleton />
              </Grid>
            ))
          : (
            <>
              <Grid item xs={12} md={3}>
                <MetricCard title="Total Users" value={stats.totalUsers} change="+2%" />
              </Grid>
              <Grid item xs={12} md={3}>
                <MetricCard title="Total Orders" value={stats.totalOrders} change="+15%" />
              </Grid>
              <Grid item xs={12} md={3}>
                <MetricCard title="New Users" value={stats.newUsers} change="+2%" />
              </Grid>
              <Grid item xs={12} md={3}>
                <MetricCard
                  title="Satisfaction Rate"
                  value={`${stats.satisfactionRate}%`}
                  change="+5%"
                />
              </Grid>
            </>
          )}
      </Grid>

      {/* Charts */}
      <Grid container spacing={3} mb={6}>
        <Grid item xs={12} md={8}>
          {loading ? <ChartSkeleton /> : <PerformanceBarChart data={chartData} />}
        </Grid>

        <Grid item xs={12} md={4}>
          {loading ? <ChartSkeleton /> : <AttendanceDonutChart />}
        </Grid>
      </Grid>

      {/* Orders */}
      {loading ? (
        <TableSkeleton />
      ) : (
        <RecentOrdersTable rows={orders} />
      )}
    </Box>
  )
}
