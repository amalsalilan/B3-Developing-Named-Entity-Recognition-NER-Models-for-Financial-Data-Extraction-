import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
  ArrowRight
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI-Powered NER",
      description: "Advanced Named Entity Recognition for financial documents using BERT/FinBERT models",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Document Processing",
      description: "Extract entities from SEC filings, earnings reports, and financial news",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "Entity Extraction",
      description: "Identify companies, stock prices, revenue, market cap, and financial events",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Financial Analytics",
      description: "Transform extracted data into actionable insights and visualizations",
      color: "from-orange-500 to-red-500"
    }
  ];

  const entityTypes = [
    { name: "Companies", count: "15+", examples: ["Apple Inc.", "Microsoft Corp"] },
    { name: "Financial Metrics", count: "12+", examples: ["Revenue", "EPS", "P/E Ratio"] },
    { name: "Stock Data", count: "8+", examples: ["$150.25", "Market Cap"] },
    { name: "Events", count: "6+", examples: ["Earnings Call", "M&A"] }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Upload Documents",
      description: "Upload SEC filings, earnings reports, or financial articles",
      icon: <Cloud className="w-8 h-8" />
    },
    {
      step: "2",
      title: "AI Processing",
      description: "Our NER models extract financial entities automatically",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      step: "3",
      title: "View Results",
      description: "Explore extracted entities in interactive dashboards",
      icon: <Search className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Export Insights",
      description: "Download structured data for further analysis",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-600 via-blue-600 to-indigo-700 text-white">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full text-sm mb-8">
              <Zap className="w-4 h-4" />
              AI-Powered Financial NER Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-green-200">
              FinanceInsight
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Extract meaningful financial insights from documents using advanced 
              <span className="font-semibold text-white"> Named Entity Recognition</span> and AI technology
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <Link
              to="/upload"
              className="group bg-white text-green-600 font-semibold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center gap-3 hover:scale-105"
            >
              <FileText className="w-5 h-5" />
              Upload Financial Documents
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/about"
              className="group bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-2xl hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center gap-3"
            >
              <Brain className="w-5 h-5" />
              Learn About NER Technology
            </Link>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { number: "99.5%", label: "Accuracy" },
              { number: "15+", label: "Entity Types" },
              { number: "50K+", label: "Docs Processed" },
              { number: "1M+", label: "Entities Found" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How FinanceInsight Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From financial documents to actionable insights in three simple steps
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Updated for NER */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Advanced Financial NER Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powered by state-of-the-art AI models trained specifically for financial data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Entity Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Financial Entities We Extract
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive entity recognition for complete financial analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {entityTypes.map((entity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {entity.count}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">
                    {entity.name}
                  </h3>
                </div>
                <div className="space-y-2">
                  {entity.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-br from-green-500 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Powered by Cutting-Edge AI
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Built with state-of-the-art NLP models and financial domain expertise
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: "BERT/FinBERT", description: "Transformer models fine-tuned for financial text" },
              { name: "Named Entity Recognition", description: "Advanced entity extraction algorithms" },
              { name: "Financial NLP", description: "Domain-specific natural language processing" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <Target className="w-12 h-12 mx-auto mb-4 text-green-300" />
                <h3 className="text-xl font-semibold mb-3">{tech.name}</h3>
                <p className="text-green-100">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Extract Financial Insights?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Start using advanced NER technology to transform your financial documents into structured data
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/upload"
                className="group bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-2xl font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center gap-3 justify-center"
              >
                <FileText className="w-5 h-5" />
                Upload Your First Document
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-semibold text-lg hover:border-green-500 hover:text-green-600 transition-all duration-300 flex items-center gap-3 justify-center"
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