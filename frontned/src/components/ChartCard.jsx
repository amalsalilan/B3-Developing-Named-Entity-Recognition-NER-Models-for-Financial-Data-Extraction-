import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ChartCard({ data }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <Bar data={data} />
    </div>
  )
}
