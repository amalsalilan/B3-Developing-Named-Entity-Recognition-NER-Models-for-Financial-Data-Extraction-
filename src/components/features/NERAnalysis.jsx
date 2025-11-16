import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Target,
  TrendingUp,
  BarChart3,
  Building,
  DollarSign,
  Calendar,
  CheckCircle2,
  Copy,
  Download,
  ZoomIn,
  Filter
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function NERAnalysis() {
  const [activeEntity, setActiveEntity] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const entities = [
    {
      type: 'COMPANY',
      color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      count: 15,
      examples: ['Apple Inc.', 'Microsoft Corp', 'Tesla Inc.', 'JPMorgan Chase']
    },
    {
      type: 'REVENUE',
      color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      count: 12,
      examples: ['$89.5 billion Q2 2024', '€45.2 million', '₹1,20,000 crores']
    },
    {
      type: 'STOCK_PRICE',
      color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400',
      count: 8,
      examples: ['$150.25', '€120.50', '¥28,500']
    },
    {
      type: 'MARKET_CAP',
      color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      count: 6,
      examples: ['$2.5 trillion', '$1.8 trillion', '₹15L crores']
    },
    {
      type: 'FINANCIAL_EVENT',
      color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      count: 5,
      examples: ['Q3 Earnings Call', 'M&A Announcement', 'Stock Split']
    },
    {
      type: 'FINANCIAL_RATIO',
      color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      count: 7,
      examples: ['P/E Ratio: 25.3', 'ROE: 18.2%', 'Debt-to-Equity: 0.45']
    }
  ];

  const metrics = [
    { label: 'Total Entities', value: '53', icon: Target, color: 'from-purple-500 to-pink-500' },
    { label: 'Precision', value: '94%', icon: TrendingUp, color: 'from-blue-500 to-cyan-500' },
    { label: 'Entity Types', value: '6', icon: BarChart3, color: 'from-green-500 to-emerald-500' },
    { label: 'Confidence Avg', value: '92%', icon: Brain, color: 'from-orange-500 to-red-500' }
  ];

  const filteredEntities = selectedFilter === 'all' 
    ? entities 
    : entities.filter(e => e.type === selectedFilter);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Named Entity Recognition</h2>
            <p className="text-gray-600 dark:text-gray-400">AI-powered financial entity extraction</p>
          </div>
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card p-6 group"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 group-hover:shadow-lg transition-all duration-300 bg-gradient-to-br",
                metric.color
              )}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{metric.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{metric.label}</div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-4 flex items-center gap-3 flex-wrap"
      >
        <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        <button
          onClick={() => setSelectedFilter('all')}
          className={cn(
            "px-4 py-2 rounded-lg font-medium transition-all duration-300",
            selectedFilter === 'all'
              ? "bg-gradient-horizon text-white shadow-horizon"
              : "bg-gray-100 dark:bg-horizon-secondary/30 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-horizon-secondary/50"
          )}
        >
          All Entities
        </button>
        {entities.map((entity) => (
          <button
            key={entity.type}
            onClick={() => setSelectedFilter(entity.type)}
            className={cn(
              "px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm",
              selectedFilter === entity.type
                ? cn(entity.color, "ring-2 ring-offset-2 dark:ring-offset-horizon-dark ring-current")
                : cn(entity.color, "opacity-70 hover:opacity-100")
            )}
          >
            {entity.type.replace('_', ' ')} ({entity.count})
          </button>
        ))}
      </motion.div>

      {/* Entities Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="wait">
          {filteredEntities.map((entity, index) => (
            <motion.div
              key={entity.type}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              whileHover={{ y: -5 }}
              onClick={() => setActiveEntity(activeEntity === entity.type ? null : entity.type)}
              className="glass-card p-6 cursor-pointer group hover:shadow-horizon transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", entity.color)}>
                  {entity.type === 'COMPANY' && <Building className="w-6 h-6" />}
                  {entity.type === 'REVENUE' && <DollarSign className="w-6 h-6" />}
                  {entity.type === 'STOCK_PRICE' && <TrendingUp className="w-6 h-6" />}
                  {entity.type === 'MARKET_CAP' && <BarChart3 className="w-6 h-6" />}
                  {entity.type === 'FINANCIAL_EVENT' && <Calendar className="w-6 h-6" />}
                  {entity.type === 'FINANCIAL_RATIO' && <Brain className="w-6 h-6" />}
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{entity.count}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">found</div>
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-horizon-primary transition-colors">
                {entity.type.replace('_', ' ')}
              </h3>

              <div className="space-y-2 mb-4">
                {entity.examples.slice(0, 2).map((example, idx) => (
                  <div key={idx} className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0" />
                    {example}
                  </div>
                ))}
              </div>

              <AnimatePresence>
                {activeEntity === entity.type && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pt-4 border-t border-gray-200/50 dark:border-white/10 mt-4"
                  >
                    <div className="space-y-2">
                      {entity.examples.map((example, idx) => (
                        <div key={idx} className="flex items-center justify-between p-2 bg-gray-50/50 dark:bg-horizon-secondary/30 rounded-lg group/item hover:bg-gray-100 dark:hover:bg-horizon-secondary/50 transition-colors">
                          <span className="text-sm text-gray-700 dark:text-gray-300">{example}</span>
                          <button className="p-1 opacity-0 group-hover/item:opacity-100 transition-opacity" title="Copy">
                            <Copy className="w-4 h-4 text-horizon-primary" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Document Highlighting */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass-card p-8"
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <ZoomIn className="w-5 h-5 text-horizon-primary" />
          Document Analysis Preview
        </h3>
        
        <div className="bg-gray-50/50 dark:bg-horizon-secondary/30 rounded-xl p-6 text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-4 max-h-96 overflow-y-auto">
          <p>
            <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 px-2 py-1 rounded font-semibold">Apple Inc.</span> reported strong quarterly results with 
            <span className="bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 px-2 py-1 rounded font-semibold ml-1">revenue of $89.5 billion</span>. The company's stock, trading at 
            <span className="bg-cyan-100 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-400 px-2 py-1 rounded font-semibold ml-1">$150.25</span>, reached a 
            <span className="bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 px-2 py-1 rounded font-semibold ml-1">market cap of $2.5 trillion</span>.
          </p>
          
          <p>
            This <span className="bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400 px-2 py-1 rounded font-semibold">earnings announcement</span> represents a significant milestone with a 
            <span className="bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400 px-2 py-1 rounded font-semibold ml-1">P/E ratio of 25.3</span>, indicating strong investor confidence.
          </p>
        </div>
      </motion.div>

      {/* Export Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg transition-all duration-300 hover:scale-105">
          <Download className="w-5 h-5" />
          Export NER Results
        </button>
      </motion.div>
    </div>
  );
}
