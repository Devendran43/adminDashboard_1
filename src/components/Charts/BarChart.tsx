import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import type { ChartPoint } from '../../features/dashboard/dashboard.types'

// const data = [
//   { name: 'Mon', value: 40 },
//   { name: 'Tue', value: 30 },
//   { name: 'Wed', value: 20 },
//   { name: 'Thu', value: 27 },
//   { name: 'Fri', value: 50 },
//   { name: 'Sat', value: 35 },
//   { name: 'Sun', value: 45 },
// ]

// export default function PerformanceBarChart() {
//   return (
//     <ResponsiveContainer width="100%" height={280}>
//       <BarChart data={data}>
//         <XAxis dataKey="name" stroke="#9CA3AF" />
//         <YAxis stroke="#9CA3AF" />
//         <Tooltip />
//         <Bar
//           dataKey="value"
//           fill="#8B5CF6"
//           radius={[6, 6, 0, 0]}
//         />
//       </BarChart>
//     </ResponsiveContainer>
//   )
// }


export default function PerformanceBarChart({
  data,
}: {
  data: ChartPoint[]
}) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={data}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8B5CF6" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
