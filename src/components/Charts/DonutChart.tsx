import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'

const data = [
  { name: 'Present', value: 62, color: '#8B5CF6' },
  { name: 'On Leave', value: 10, color: '#FACC15' },
  { name: 'Holiday', value: 25, color: '#22C55E' },
  { name: 'Absent', value: 14, color: '#EF4444' },
  
]

export default function AttendanceDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          innerRadius={70}
          outerRadius={100}
          paddingAngle={3}
        >
          {data.map(entry => (
            <Cell key={entry.name} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  )
}
