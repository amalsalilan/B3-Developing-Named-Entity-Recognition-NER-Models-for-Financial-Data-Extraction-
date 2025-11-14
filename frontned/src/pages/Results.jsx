import { motion } from 'framer-motion'
import ChartCard from '../components/ChartCard'
import { 
  TrendingUp, 
  PieChart, 
  Download, 
  Building,
  DollarSign,
  Calendar,
  BarChart3,
  Target
} from 'lucide-react'

export default function Results() {
  // Financial entities based on your project proposal
  const financialData = {
    labels: ['COMPANY', 'REVENUE', 'STOCK_PRICE', 'MARKET_CAP', 'FINANCIAL_EVENT', 'FINANCIAL_RATIO'],
    datasets: [
      {
        label: 'Financial Entities Extracted',
        data: [15, 12, 8, 6, 5, 7],
        backgroundColor: [
          'rgba(99, 102, 241, 0.8)',    // COMPANY - Indigo
          'rgba(16, 185, 129, 0.8)',    // REVENUE - Green
          'rgba(245, 158, 11, 0.8)',    // STOCK_PRICE - Amber
          'rgba(139, 92, 246, 0.8)',    // MARKET_CAP - Purple
          'rgba(236, 72, 153, 0.8)',    // FINANCIAL_EVENT - Pink
          'rgba(59, 130, 246, 0.8)'     // FINANCIAL_RATIO - Blue
        ],
      },
    ],
  }

  const financialStats = [
    { label: 'Companies Identified', value: '15', icon: <Building className="w-5 h-5" /> },
    { label: 'Financial Metrics', value: '25', icon: <BarChart3 className="w-5 h-5" /> },
    { label: 'Stock References', value: '8', icon: <DollarSign className="w-5 h-5" /> },
    { label: 'Events Detected', value: '5', icon: <Calendar className="w-5 h-5" /> },
  ]

  const extractedFinancialData = {
    COMPANY: ['Apple Inc.', 'Microsoft Corporation', 'Tesla Inc.', 'JPMorgan Chase & Co.'],
    REVENUE: ['$89.5 billion Q2 2024', '€45.2 million FY2023', '₹1,20,000 crores'],
    STOCK_PRICE: ['$150.25 ±2.3%', '€120.50', '¥28,500'],
    MARKET_CAP: ['$2.5 trillion', '$1.8 trillion', '₹15L crores'],
    FINANCIAL_EVENT: ['Q3 Earnings Call Aug 15', 'M&A Announcement', 'Stock Split 4:1'],
    FINANCIAL_RATIO: ['P/E Ratio: 25.3', 'ROE: 18.2%', 'Debt-to-Equity: 0.45']
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50/30 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Financial NER Results
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Extracted financial entities and metrics from your documents
          </p>
        </motion.div>

        {/* Financial Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {financialStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 text-center"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white mx-auto mb-2">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Financial Entities Chart */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Target className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Financial Entities Distribution</h3>
                <p className="text-gray-600 text-sm">NER model extraction results</p>
              </div>
            </div>
            <ChartCard data={financialData} />
          </div>

          {/* Extracted Financial Data */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <PieChart className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Extracted Financial Data</h3>
                <p className="text-gray-600 text-sm">Categorized entities from documents</p>
              </div>
            </div>
            
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {Object.entries(extractedFinancialData).map(([category, items]) => (
                <div key={category} className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">{category.replace('_', ' ')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item, index) => (
                      <span
                        key={index}
                        className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm border border-green-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Confidence Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-6 text-white"
        >
          <h3 className="font-semibold mb-4 text-lg">NER Model Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">94%</div>
              <div className="text-green-100 text-sm">Precision</div>
            </div>
            <div>
              <div className="text-2xl font-bold">89%</div>
              <div className="text-green-100 text-sm">Recall</div>
            </div>
            <div>
              <div className="text-2xl font-bold">91%</div>
              <div className="text-green-100 text-sm">F1-Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold">96%</div>
              <div className="text-green-100 text-sm">Accuracy</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}