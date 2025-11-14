import React from "react";
import { motion } from "framer-motion";
import { 
  FileText, 
  Cpu, 
  Database, 
  Target,
  Github,
  Linkedin,
  Mail,
  Shield,
  Zap,
  Users,
  Code,
  Cloud,
  Brain,
  Search
} from "lucide-react";

const team = [
  {
    name: "Naveen",
    role: "ML Engineer & Project Lead",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Specialized in NLP and transformer models for financial text analysis.",
    social: { linkedin: "#", github: "#", email: "#" }
  },
  {
    name: "Mayur",
    role: "NLP Data Scientist",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Expert in financial entity recognition and model training.",
    social: { linkedin: "#", github: "#", email: "#" }
  },
  {
    name: "Ishant",
    role: "Backend & API Integration",
    img: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face",
    bio: "Building robust systems for financial data processing and API integrations.",
    social: { linkedin: "#", github: "#", email: "#" }
  },
  {
    name: "Karthi",
    role: "Data Engineer & Testing",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    bio: "Ensuring data quality and model performance through comprehensive testing.",
    social: { linkedin: "#", github: "#", email: "#" }
  },
];

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Financial NER",
    description: "Advanced Named Entity Recognition for financial terminology"
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Document Parsing",
    description: "Extract data from SEC filings, earnings reports, and financial news"
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Entity Extraction",
    description: "Identify companies, stock prices, revenue, and financial metrics"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "AI Models",
    description: "BERT/FinBERT models fine-tuned for financial data"
  }
];

const stats = [
  { number: "15+", label: "Entity Types" },
  { number: "99.5%", label: "Accuracy" },
  { number: "50K+", label: "Documents Processed" },
  { number: "1M+", label: "Entities Extracted" }
];

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50 text-gray-800">
      {/* Enhanced Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 via-blue-600 to-indigo-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
              FinanceInsight
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Advanced Named Entity Recognition for Financial Data Extraction and Analysis
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Brain className="w-5 h-5" />
              Explore NER Technology
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Description - UPDATED FOR NER */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Financial NER Technology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed text-gray-700">
                FinanceInsight specializes in <strong>Named Entity Recognition (NER)</strong> for financial documents. 
                Our AI models extract critical financial entities like company names, stock prices, revenue figures, 
                and market events from unstructured text data.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <FileText className="w-6 h-6 text-green-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Document Processing</h4>
                    <p className="text-gray-600">SEC filings, earnings reports, financial news</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <Cpu className="w-6 h-6 text-blue-500" />
                  <div>
                    <h4 className="font-semibold text-gray-900">AI-Powered Extraction</h4>
                    <p className="text-gray-600">BERT/FinBERT models fine-tuned for finance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                  alt="Financial NER Processing"
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid - UPDATED FOR NER */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              NER Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced entity recognition specifically designed for financial data
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Section - UPDATED */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our NER Mission
              </h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed text-gray-700">
                  We're revolutionizing financial analysis through advanced Named Entity Recognition. 
                  Our mission is to extract structured financial data from unstructured text, making 
                  it accessible for analysts, investors, and data scientists.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  By combining cutting-edge NLP technology with financial domain expertise, we're 
                  building intelligent systems that understand financial language and extract 
                  meaningful insights automatically.
                </p>
              </div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 mt-8 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Target className="w-5 h-5" />
                Learn About NER Technology
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 mb-4">
                    <Brain className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">AI-Powered</h4>
                  <p className="text-sm text-gray-600">Advanced ML models for finance</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                    <Database className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Comprehensive</h4>
                  <p className="text-sm text-gray-600">15+ financial entity types</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">High Accuracy</h4>
                  <p className="text-sm text-gray-600">99.5% entity recognition</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">Enterprise Ready</h4>
                  <p className="text-sm text-gray-600">Secure and scalable</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section - UPDATED ROLES */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our AI & NLP Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experts in machine learning, natural language processing, and financial technology
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group bg-gradient-to-br from-white to-green-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg group-hover:border-green-500 transition-colors duration-300">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 text-center font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.github}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - UPDATED */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Extract Financial Insights?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven financial entity recognition
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Try NER Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              View API Documentation
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}