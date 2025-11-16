import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Smile,
  TrendingUp,
  PieChart,
  BarChart3,
  MessageSquare,
  Heart,
  AlertCircle,
  ThumbsUp,
  ThumbsDown,
  Minus,
  Download
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function SentimentAnalysis() {
  const [activeTab, setActiveTab] = useState('overview');

  const sentimentData = {
    positive: 65,
    neutral: 20,
    negative: 15
  };

  const sentimentMetrics = [
    {
      sentiment: 'POSITIVE',
      icon: ThumbsUp,
      percentage: 65,
      color: 'from-green-500 to-emerald-500',
      textColor: 'text-green-600 dark:text-green-400',
      count: 156,
      examples: ['Excellent financial performance', 'Strong growth trajectory', 'Investor confidence high']
    },
    {
      sentiment: 'NEUTRAL',
      icon: Minus,
      percentage: 20,
      color: 'from-gray-500 to-slate-500',
      textColor: 'text-gray-600 dark:text-gray-400',
      count: 48,
      examples: ['Reported quarterly earnings', 'Market conditions stable', 'Regulatory compliance met']
    },
    {
      sentiment: 'NEGATIVE',
      icon: ThumbsDown,
      percentage: 15,
      color: 'from-red-500 to-rose-500',
      textColor: 'text-red-600 dark:text-red-400',
      count: 36,
      examples: ['Market volatility concerns', 'Declining profit margins', 'Competition intensifying']
    }
  ];

  const sentenceExamples = {
    positive: [
      { text: 'The company achieved record-breaking revenue growth of 45% year-over-year.', confidence: 96 },
      { text: 'Investors expressed strong confidence in the new strategic initiatives.', confidence: 92 },
      { text: 'Market analysts upgraded their price targets citing strong fundamentals.', confidence: 94 }
    ],
    neutral: [
      { text: 'The company reported Q3 earnings in line with expectations.', confidence: 88 },
      { text: 'Operating margins remained stable at 18% during the quarter.', confidence: 85 },
      { text: 'The board announced routine dividend payments to shareholders.', confidence: 87 }
    ],
    negative: [
      { text: 'The company faces increasing competition from emerging market players.', confidence: 91 },
      { text: 'Supply chain disruptions impacted operational efficiency negatively.', confidence: 89 },
      { text: 'Declining demand in key markets poses significant challenges ahead.', confidence: 93 }
    ]
  };

  const trendData = [
    { period: 'Week 1', positive: 70, neutral: 20, negative: 10 },
    { period: 'Week 2', positive: 65, neutral: 22, negative: 13 },
    { period: 'Week 3', positive: 68, neutral: 18, negative: 14 },
    { period: 'Week 4', positive: 72, neutral: 16, negative: 12 },
  ];

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
          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Smile className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Sentiment Analysis</h2>
            <p className="text-gray-600 dark:text-gray-400">Financial document sentiment classification</p>
          </div>
        </div>
      </motion.div>

      {/* Overall Sentiment Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-6"
      >
        {sentimentMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.sentiment}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 text-center group"
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 bg-gradient-to-br group-hover:shadow-lg transition-all",
                metric.color
              )}>
                <Icon className="w-8 h-8" />
              </div>

              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                {metric.percentage}%
              </div>
              <div className="text-lg font-semibold mb-4 text-gray-700 dark:text-gray-300">
                {metric.sentiment}
              </div>

              <div className="w-full bg-gray-200/50 dark:bg-horizon-secondary/50 rounded-full h-2 mb-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${metric.percentage}%` }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                  className={cn("h-full bg-gradient-to-r", metric.color)}
                />
              </div>

              <div className="text-sm text-gray-600 dark:text-gray-400">
                {metric.count} sentences
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card p-6"
      >
        <div className="flex gap-4 mb-6 border-b border-gray-200/50 dark:border-white/10">
          {[
            { id: 'overview', label: 'Sentiment Overview', icon: PieChart },
            { id: 'sentences', label: 'Sentence Examples', icon: MessageSquare },
            { id: 'trends', label: 'Sentiment Trends', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-3 font-medium transition-all duration-300 border-b-2",
                  activeTab === tab.id
                    ? "border-horizon-primary text-horizon-primary"
                    : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                )}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sentiment Distribution */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Distribution</h4>
                  {Object.entries(sentimentData).map(([key, value]) => {
                    const metric = sentimentMetrics.find(m => m.sentiment === key.toUpperCase());
                    return (
                      <div key={key} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className={cn("font-medium capitalize", metric.textColor)}>{key}</span>
                          <span className="font-bold text-gray-900 dark:text-white">{value}%</span>
                        </div>
                        <div className="w-full bg-gray-200/50 dark:bg-horizon-secondary/50 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className={cn("h-full bg-gradient-to-r", metric.color)}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key Insights */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">Key Insights</h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200/50 dark:border-green-800/30 rounded-lg">
                      <div className="flex items-start gap-2">
                        <Heart className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-green-900 dark:text-green-300">Positive Sentiment</p>
                          <p className="text-sm text-green-700 dark:text-green-400">Strong investor confidence and growth indicators</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200/50 dark:border-yellow-800/30 rounded-lg">
                      <div className="flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-yellow-900 dark:text-yellow-300">Neutral Mentions</p>
                          <p className="text-sm text-yellow-700 dark:text-yellow-400">Routine updates and factual reporting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Sentences Tab */}
          {activeTab === 'sentences' && (
            <motion.div
              key="sentences"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {Object.entries(sentenceExamples).map(([sentiment, examples]) => {
                const metric = sentimentMetrics.find(m => m.sentiment === sentiment.toUpperCase());
                return (
                  <div key={sentiment} className="space-y-3">
                    <h4 className={cn("font-semibold capitalize flex items-center gap-2", metric.textColor)}>
                      {metric.icon && React.createElement(metric.icon, { className: 'w-5 h-5' })}
                      {sentiment} Examples
                    </h4>
                    {examples.map((example, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-4 bg-gray-50/50 dark:bg-horizon-secondary/30 rounded-lg border-l-4"
                        style={{
                          borderLeftColor: sentiment === 'positive' ? '#10b981' : sentiment === 'neutral' ? '#6b7280' : '#ef4444'
                        }}
                      >
                        <p className="text-gray-700 dark:text-gray-300 mb-3">{example.text}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600 dark:text-gray-400">Confidence Score</span>
                          <div className="flex items-center gap-2">
                            <div className="w-20 h-1 bg-gray-200 dark:bg-horizon-secondary rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${example.confidence}%` }}
                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                className={cn("h-full bg-gradient-to-r", metric.color)}
                              />
                            </div>
                            <span className="font-semibold text-gray-900 dark:text-white text-sm w-8">{example.confidence}%</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                );
              })}
            </motion.div>
          )}

          {/* Trends Tab */}
          {activeTab === 'trends' && (
            <motion.div
              key="trends"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {trendData.map((week, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="glass-card p-4 text-center"
                  >
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3">{week.period}</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-green-600 dark:text-green-400">Positive</span>
                        <span className="font-bold">{week.positive}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Neutral</span>
                        <span className="font-bold">{week.neutral}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-red-600 dark:text-red-400">Negative</span>
                        <span className="font-bold">{week.negative}%</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 p-4 bg-gray-50/50 dark:bg-horizon-secondary/30 rounded-lg">
                📈 Overall sentiment trend shows increasing positivity over the month, with investor confidence building steadily.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Export Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex justify-center"
      >
        <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Download className="w-5 h-5" />
          Export Sentiment Report
        </button>
      </motion.div>
    </div>
  );
}
