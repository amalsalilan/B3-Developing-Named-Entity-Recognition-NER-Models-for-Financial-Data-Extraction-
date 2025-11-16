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
import { useTheme } from '../contexts/ThemeContext'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ChartCard({ data }) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: isDark ? '#E5E7EB' : '#374151',
          font: {
            family: "'DM Sans', sans-serif",
          },
        },
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(27, 37, 75, 0.95)' : 'rgba(255, 255, 255, 0.95)',
        titleColor: isDark ? '#E5E7EB' : '#111827',
        bodyColor: isDark ? '#E5E7EB' : '#111827',
        borderColor: isDark ? 'rgba(67, 24, 255, 0.3)' : 'rgba(67, 24, 255, 0.2)',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          font: {
            family: "'DM Sans', sans-serif",
          },
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        },
      },
      y: {
        ticks: {
          color: isDark ? '#9CA3AF' : '#6B7280',
          font: {
            family: "'DM Sans', sans-serif",
          },
        },
        grid: {
          color: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
        },
      },
    },
  }

  return (
    <div className="w-full">
      <Bar data={data} options={chartOptions} />
    </div>
  )
}
