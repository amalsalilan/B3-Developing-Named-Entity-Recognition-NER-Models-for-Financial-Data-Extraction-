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
  Search,
  Sparkles,
  TrendingUp
} from "lucide-react";
import { cn } from "../lib/utils";

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
    icon: Brain,
    title: "Financial NER",
    description: "Advanced Named Entity Recognition for financial terminology"
  },
  {
    icon: FileText,
    title: "Document Parsing",
    description: "Extract data from SEC filings, earnings reports, and financial news"
  },
  {
    icon: Search,
    title: "Entity Extraction",
    description: "Identify companies, stock prices, revenue, and financial metrics"
  },
  {
    icon: Cpu,
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
  return (
    <div className="min-h-screen bg-horizon-light dark:bg-horizon-dark transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark opacity-50 dark:opacity-100"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-horizon-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-horizon-accent.blue/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="inline-flex items-center gap-2 glass px-6 py-2 rounded-full text-sm mb-6">
              <Sparkles className="w-4 h-4 text-horizon-accent.blue" />
              <span className="text-gray-700 dark:text-gray-200">About FinSight AI</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">FinSight AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Advanced Named Entity Recognition for Financial Data Extraction and Analysis
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Project Description */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Financial NER Technology
            </h2>
            <div className="w-24 h-1 bg-gradient-horizon mx-auto mb-8 rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                FinSight AI specializes in <strong className="text-gray-900 dark:text-white">Named Entity Recognition (NER)</strong> for financial documents. 
                Our AI models extract critical financial entities like company names, stock prices, revenue figures, 
                and market events from unstructured text data.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-card group hover:scale-105 transition-transform">
                  <FileText className="w-6 h-6 text-horizon-primary" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Document Processing</h4>
                    <p className="text-gray-600 dark:text-gray-400">SEC filings, earnings reports, financial news</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 glass-card group hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6 text-horizon-accent.blue" />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">AI-Powered Extraction</h4>
                    <p className="text-gray-600 dark:text-gray-400">BERT/FinBERT models fine-tuned for finance</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-video bg-gradient-horizon flex items-center justify-center">
                  <Brain className="w-24 h-24 text-white opacity-50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
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
              NER Capabilities
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Advanced entity recognition specifically designed for financial data
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card p-8 group hover:shadow-horizon transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-horizon rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Our AI & NLP Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Experts in machine learning, natural language processing, and financial technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-8 text-center group hover:shadow-horizon transition-all duration-500"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-horizon-primary/30 group-hover:border-horizon-primary transition-colors duration-300">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-horizon-primary font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="flex justify-center gap-4">
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-horizon-primary/10 dark:bg-horizon-primary/20 rounded-full flex items-center justify-center text-horizon-primary hover:bg-horizon-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1, y: -2 }}
                    href={member.social.github}
                    className="w-10 h-10 bg-horizon-primary/10 dark:bg-horizon-primary/20 rounded-full flex items-center justify-center text-horizon-primary hover:bg-horizon-primary hover:text-white transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
