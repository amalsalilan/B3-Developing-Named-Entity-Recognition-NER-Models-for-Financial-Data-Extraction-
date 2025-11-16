import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Search,
  Shield,
  AlertTriangle,
  CheckCircle,
  BookOpen,
  Copy,
  Download,
  ChevronDown,
  Lightbulb
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ClauseExtraction() {
  const [expandedClause, setExpandedClause] = useState(null);

  const clauses = [
    {
      type: 'CONFIDENTIALITY',
      icon: Shield,
      count: 3,
      color: 'from-blue-500 to-cyan-500',
      clauses: [
        {
          id: 1,
          text: 'The parties agree to keep all proprietary information confidential for a period of 5 years after termination.',
          importance: 'Critical',
          section: 'Section 4.2'
        },
        {
          id: 2,
          text: 'Confidentiality obligations do not apply to information that is publicly available or independently developed.',
          importance: 'Medium',
          section: 'Section 4.3'
        },
        {
          id: 3,
          text: 'Either party may disclose confidential information if required by law or court order.',
          importance: 'High',
          section: 'Section 4.4'
        }
      ]
    },
    {
      type: 'LIABILITY',
      icon: AlertTriangle,
      count: 4,
      color: 'from-orange-500 to-red-500',
      clauses: [
        {
          id: 1,
          text: 'Each party limits liability to the total fees paid in the 12 months preceding the claim.',
          importance: 'Critical',
          section: 'Section 7.1'
        },
        {
          id: 2,
          text: 'Neither party shall be liable for indirect, incidental, or consequential damages.',
          importance: 'Critical',
          section: 'Section 7.2'
        },
        {
          id: 3,
          text: 'The limit of liability does not apply to indemnification obligations.',
          importance: 'High',
          section: 'Section 7.3'
        },
        {
          id: 4,
          text: 'Third-party claims require 30-day notice and reasonable cooperation.',
          importance: 'Medium',
          section: 'Section 7.4'
        }
      ]
    },
    {
      type: 'TERMINATION',
      icon: BookOpen,
      count: 2,
      color: 'from-purple-500 to-pink-500',
      clauses: [
        {
          id: 1,
          text: 'Either party may terminate this agreement with 90 days written notice.',
          importance: 'Critical',
          section: 'Section 8.1'
        },
        {
          id: 2,
          text: 'Upon termination, all obligations survive except confidentiality which extends 5 years post-termination.',
          importance: 'High',
          section: 'Section 8.2'
        }
      ]
    },
    {
      type: 'PAYMENT_TERMS',
      icon: CheckCircle,
      count: 5,
      color: 'from-green-500 to-emerald-500',
      clauses: [
        {
          id: 1,
          text: 'Payment is due within 30 days of invoice date.',
          importance: 'Critical',
          section: 'Section 5.1'
        },
        {
          id: 2,
          text: 'Late payments accrue interest at 1.5% per month.',
          importance: 'Medium',
          section: 'Section 5.2'
        },
        {
          id: 3,
          text: 'All invoices are in USD unless otherwise specified.',
          importance: 'Low',
          section: 'Section 5.3'
        },
        {
          id: 4,
          text: 'Customer may dispute invoices within 15 days of receipt.',
          importance: 'Medium',
          section: 'Section 5.4'
        },
        {
          id: 5,
          text: 'Non-payment for 60 days may result in service suspension.',
          importance: 'High',
          section: 'Section 5.5'
        }
      ]
    }
  ];

  const importanceColor = {
    'Critical': 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800/30',
    'High': 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800/30',
    'Medium': 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800/30',
    'Low': 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800/30'
  };

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
          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Clause Extraction</h2>
            <p className="text-gray-600 dark:text-gray-400">AI-powered contract clause identification and analysis</p>
          </div>
        </div>
      </motion.div>

      {/* Summary Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {clauses.map((clauseGroup, index) => {
          const Icon = clauseGroup.icon;
          return (
            <motion.div
              key={clauseGroup.type}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 text-center group"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center text-white mx-auto mb-4 bg-gradient-to-br group-hover:shadow-lg transition-all",
                clauseGroup.color
              )}>
                <Icon className="w-6 h-6" />
              </div>

              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {clauseGroup.count}
              </div>
              <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {clauseGroup.type.replace('_', ' ')}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                {clauseGroup.count} clause{clauseGroup.count > 1 ? 's' : ''} found
              </p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Clauses by Type */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-4"
      >
        {clauses.map((clauseGroup, groupIndex) => {
          const Icon = clauseGroup.icon;
          return (
            <motion.div
              key={clauseGroup.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + groupIndex * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <button
                onClick={() => setExpandedClause(expandedClause === clauseGroup.type ? null : clauseGroup.type)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50/50 dark:hover:bg-horizon-secondary/50 transition-colors"
              >
                <div className="flex items-center gap-4 text-left">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center text-white bg-gradient-to-br",
                    clauseGroup.color
                  )}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {clauseGroup.type.replace('_', ' ')}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {clauseGroup.count} clause{clauseGroup.count > 1 ? 's' : ''} identified
                    </p>
                  </div>
                </div>

                <motion.div
                  animate={{ rotate: expandedClause === clauseGroup.type ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedClause === clauseGroup.type && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-200/50 dark:border-white/10 p-6 space-y-4 bg-gray-50/30 dark:bg-horizon-secondary/20"
                  >
                    {clauseGroup.clauses.map((clause, clauseIndex) => (
                      <motion.div
                        key={clause.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: clauseIndex * 0.05 }}
                        className="p-4 bg-white dark:bg-horizon-dark rounded-lg border border-gray-200/50 dark:border-white/10 hover:shadow-md transition-shadow"
                      >
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1">
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                              {clause.text}
                            </p>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="p-2 opacity-0 hover:opacity-100 transition-opacity text-horizon-primary"
                            title="Copy clause"
                          >
                            <Copy className="w-4 h-4" />
                          </motion.button>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                          <span className={cn(
                            "px-3 py-1 rounded-full text-xs font-semibold border",
                            importanceColor[clause.importance]
                          )}>
                            {clause.importance} Importance
                          </span>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {clause.section}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="glass-card p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200/50 dark:border-indigo-800/30"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-3">Contract Analysis Insights</h3>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span>14 total clauses identified across 4 major categories</span>
              </li>
              <li className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>6 critical importance clauses require careful review</span>
              </li>
              <li className="flex items-center gap-2">
                <Search className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <span>Termination and Liability clauses are aligned with industry standards</span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Export Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center gap-4"
      >
        <button className="flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
          <Download className="w-5 h-5" />
          Export Clause Report
        </button>
        <button className="flex items-center gap-3 px-8 py-4 rounded-xl glass-card border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-horizon-secondary/50 transition-all duration-300">
          <FileText className="w-5 h-5" />
          View Full Contract
        </button>
      </motion.div>
    </div>
  );
}
