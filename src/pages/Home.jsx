import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { 
  FileText, 
  Brain, 
  BarChart3, 
  Zap, 
  Target, 
  Shield,
  Database,
  Search,
  TrendingUp,
  Cpu,
  Cloud,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Activity
} from "lucide-react";
import { cn } from "../lib/utils";

export default function Home() {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered NER",
      description: "Advanced Named Entity Recognition for financial documents using BERT/FinBERT models",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: FileText,
      title: "Document Processing",
      description: "Extract entities from SEC filings, earnings reports, and financial news",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Entity Extraction",
      description: "Identify companies, stock prices, revenue, market cap, and financial events",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Transform extracted data into actionable insights and visualizations",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { number: "99.5%", label: "Accuracy", icon: Target },
    { number: "15+", label: "Entity Types", icon: Database },
    { number: "50K+", label: "Docs Processed", icon: FileText },
    { number: "1M+", label: "Entities Found", icon: Activity }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Upload Documents",
      description: "Upload SEC filings, earnings reports, or financial articles",
      icon: Cloud
    },
    {
      step: "2",
      title: "AI Processing",
      description: "Our NER models extract financial entities automatically",
      icon: Cpu
    },
    {
      step: "3",
      title: "View Results",
      description: "Explore extracted entities in interactive dashboards",
      icon: Search
    },
    {
      step: "4",
      title: "Export Insights",
      description: "Download structured data for further analysis",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-horizon-light dark:bg-horizon-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-dark opacity-50 dark:opacity-100"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-horizon-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-40 w-96 h-96 bg-horizon-accent.blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-horizon-accent.purple/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto py-20">
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-sm mb-8">
              <Sparkles className="w-4 h-4 text-horizon-accent.blue" />
              <span className="text-gray-700 dark:text-gray-200">AI-Powered Financial NER Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">FinSight AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Extract meaningful financial insights from documents using advanced 
              <span className="font-semibold text-gray-900 dark:text-white"> Named Entity Recognition</span> and AI technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <SignedIn>
              <Link
                to="/upload"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Upload Financial Documents
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SignedIn>
            <SignedOut>
              <Link
                to="/upload"
                className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg transition-all duration-300 hover:scale-105"
              >
                <FileText className="w-5 h-5" />
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </SignedOut>
            <Link
              to="/about"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl glass-card border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-horizon-secondary/50 transition-all duration-300"
            >
              <Brain className="w-5 h-5" />
              Learn More
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 bg-gradient-horizon rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:shadow-horizon transition-shadow">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              From financial documents to actionable insights in four simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-horizon rounded-2xl flex items-center justify-center text-white mx-auto group-hover:shadow-horizon transition-shadow">
                      <Icon className="w-10 h-10" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-horizon-accent.blue rounded-full flex items-center justify-center text-white text-sm font-bold shadow-glow">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gray-50/50 dark:bg-horizon-secondary/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Advanced Financial NER Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Powered by state-of-the-art AI models trained specifically for financial data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={cn(
                    "glass-card p-8 group hover:shadow-horizon transition-all duration-300"
                  )}
                >
                  <div className={cn(
                    "w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform",
                    `bg-gradient-to-br ${feature.gradient}`
                  )}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Extract Financial Insights?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
              Start using advanced NER technology to transform your financial documents into structured data
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <SignedIn>
                <Link
                  to="/upload"
                  className="group flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-horizon text-white font-semibold text-lg shadow-horizon hover:shadow-horizon-lg transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-5 h-5" />
                  Upload Your First Document
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SignedIn>
              <SignedOut>
                <Link
                  to="/upload"
                  className="group flex items-center justify-center gap-3 px-10 py-4 rounded-xl bg-gradient-horizon text-white font-semibold text-lg shadow-horizon hover:shadow-horizon-lg transition-all duration-300 hover:scale-105"
                >
                  <FileText className="w-5 h-5" />
                  Get Started Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </SignedOut>
              <Link
                to="/about"
                className="group flex items-center justify-center gap-3 px-10 py-4 rounded-xl glass-card border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold text-lg hover:bg-gray-50 dark:hover:bg-horizon-secondary/50 transition-all duration-300"
              >
                <Brain className="w-5 h-5" />
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
