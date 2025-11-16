import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Upload, 
  RefreshCw, 
  FileText, 
  X, 
  CheckCircle, 
  Zap,
  Cloud,
  Shield,
  BarChart3,
  Brain,
  Sparkles,
  ChevronRight,
  AlertCircle,
  Check
} from "lucide-react";
import { cn } from "../lib/utils";

const UploadPage = () => {
  const navigate = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [step, setStep] = useState(1); // 1: Upload, 2: Select Features, 3: Review
  const [selectedFeatures, setSelectedFeatures] = useState({
    ner: true,
    sentiment: true,
    clauses: false
  });
  const fileInputRef = useRef(null);

  const features = [
    {
      id: 'ner',
      icon: <Brain className="w-6 h-6" />,
      title: "Named Entity Recognition",
      description: "Extract companies, people, locations, and financial metrics",
      badge: "NLP"
    },
    {
      id: 'sentiment',
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Sentiment Analysis",
      description: "Analyze emotional tone and market sentiment",
      badge: "AI"
    },
    {
      id: 'clauses',
      icon: <Shield className="w-6 h-6" />,
      title: "Clause Extraction",
      description: "Identify key contractual clauses and terms",
      badge: "Legal"
    }
  ];

  const supportedFormats = [
    { type: "PDF", icon: "📄", color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" },
    { type: "DOCX", icon: "📋", color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
    { type: "TXT", icon: "📝", color: "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400" },
  ];

  const addFiles = (files) => {
    const newFiles = Array.from(files).filter(file => 
      !selectedFiles.find(f => f.name === file.name)
    );
    setSelectedFiles([...selectedFiles, ...newFiles.map(f => ({
      file: f,
      id: Math.random()
    }))]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      addFiles(files);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      addFiles(e.target.files);
    }
  };

  const removeFile = (id) => {
    setSelectedFiles(selectedFiles.filter(f => f.id !== id));
  };

  const toggleFeature = (featureId) => {
    setSelectedFeatures(prev => ({
      ...prev,
      [featureId]: !prev[featureId]
    }));
  };

  const processFiles = () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file!");
      return;
    }
    if (!Object.values(selectedFeatures).some(v => v)) {
      alert("Please select at least one analysis feature!");
      return;
    }
    
    setStep(3);
    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsUploading(false);
            // Store selected features in sessionStorage so Results page can use them
            sessionStorage.setItem('selectedAnalyses', JSON.stringify(selectedFeatures));
            sessionStorage.setItem('uploadedFiles', JSON.stringify(selectedFiles.map(f => f.file.name)));
            // Redirect to results page
            navigate('/results');
          }, 1500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleReset = () => {
    setSelectedFiles([]);
    setUploadProgress(0);
    setStep(1);
    setSelectedFeatures({ ner: true, sentiment: true, clauses: false });
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-horizon-light dark:bg-horizon-dark transition-colors duration-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-gradient-horizon rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-horizon"
          >
            <Upload className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Document Analysis Wizard</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Upload financial documents and choose which AI analyses to perform
          </p>
        </motion.div>

        {/* Progress Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex justify-between items-center"
        >
          {[
            { num: 1, label: 'Upload' },
            { num: 2, label: 'Features' },
            { num: 3, label: 'Process' }
          ].map((item, idx) => (
            <div key={item.num} className="flex items-center flex-1">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-300 shadow-lg",
                  step >= item.num
                    ? "bg-gradient-horizon text-white shadow-horizon"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                )}
              >
                {step > item.num ? <Check className="w-5 h-5" /> : item.num}
              </motion.div>
              <span className={cn(
                "ml-2 font-semibold hidden sm:block",
                step >= item.num ? "text-horizon-primary dark:text-horizon-accent.blue" : "text-gray-600 dark:text-gray-400"
              )}>
                {item.label}
              </span>
              {idx < 2 && (
                <div className={cn(
                  "flex-1 h-1 mx-3 rounded-full transition-all duration-300",
                  step > item.num ? "bg-gradient-horizon" : "bg-gray-300 dark:bg-gray-600"
                )} />
              )}
            </div>
          ))}
        </motion.div>

        {/* Step 1: Upload Files */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card overflow-hidden"
              >
                {/* Drag and Drop Area */}
                <div
                  className={cn(
                    "p-8 transition-all duration-300 m-6 rounded-2xl border-2 border-dashed",
                    isDragging 
                      ? "bg-horizon-primary/10 dark:bg-horizon-primary/20 border-horizon-primary scale-105" 
                      : "bg-gray-50/50 dark:bg-horizon-secondary/30 border-gray-300 dark:border-gray-600"
                  )}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileInput}
                    accept=".txt,.pdf,.docx"
                    multiple
                    className="hidden"
                  />
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-horizon rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-horizon">
                      <Cloud className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Drag & Drop your files
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      or <span className="text-horizon-primary font-semibold">browse files</span>
                    </p>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-8 py-3 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg transition-all duration-300 hover:scale-105"
                    >
                      Choose Files
                    </button>
                  </div>
                </div>

                {/* File List */}
                <AnimatePresence>
                  {selectedFiles.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 py-6 border-t border-gray-200/50 dark:border-white/10 bg-gray-50/50 dark:bg-horizon-secondary/10"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Selected Files ({selectedFiles.length})
                      </h4>
                      <div className="space-y-2">
                        {selectedFiles.map((item, idx) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="flex items-center justify-between p-3 bg-white dark:bg-horizon-secondary/50 rounded-lg border border-gray-200 dark:border-white/10"
                          >
                            <div className="flex items-center gap-3">
                              <FileText className="w-5 h-5 text-horizon-primary" />
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">{item.file.name}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                  {(item.file.size / 1024 / 1024).toFixed(2)} MB
                                </p>
                              </div>
                            </div>
                            <button
                              onClick={() => removeFile(item.id)}
                              className="p-2 hover:bg-red-100 dark:hover:bg-red-900/30 rounded-full transition-colors"
                            >
                              <X className="w-4 h-4 text-red-500" />
                            </button>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Supported Formats */}
                <div className="px-6 py-4 border-t border-gray-200/50 dark:border-white/10">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">Supported formats:</p>
                  <div className="flex flex-wrap gap-2">
                    {supportedFormats.map(fmt => (
                      <span key={fmt.type} className={cn("px-3 py-1 rounded-full text-sm font-medium", fmt.color)}>
                        {fmt.icon} {fmt.type}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Next Button */}
              <div className="flex justify-end gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(2)}
                  disabled={selectedFiles.length === 0}
                  className="px-8 py-3 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  Next <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Select Features */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Select Analysis Features
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Choose which AI-powered analyses you want to run on your documents
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  {features.map((feature, idx) => (
                    <motion.button
                      key={feature.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => toggleFeature(feature.id)}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className={cn(
                        "p-6 rounded-2xl border-2 transition-all duration-300 text-left",
                        selectedFeatures[feature.id]
                          ? "bg-gradient-to-br from-horizon-primary/20 to-horizon-accent.blue/20 border-horizon-primary dark:border-horizon-accent.blue shadow-lg"
                          : "bg-white dark:bg-horizon-secondary/50 border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20"
                      )}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center",
                          selectedFeatures[feature.id]
                            ? "bg-gradient-horizon text-white shadow-horizon"
                            : "bg-gray-100 dark:bg-horizon-secondary/50 text-gray-600 dark:text-gray-400"
                        )}>
                          {feature.icon}
                        </div>
                        <motion.div
                          animate={{ scale: selectedFeatures[feature.id] ? 1 : 0 }}
                          className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                        >
                          <Check className="w-4 h-4 text-white" />
                        </motion.div>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {feature.title}
                        </h3>
                        <span className="text-xs px-2 py-1 bg-horizon-primary/20 dark:bg-horizon-primary/30 text-horizon-primary dark:text-horizon-accent.blue rounded-full font-semibold">
                          {feature.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {feature.description}
                      </p>
                    </motion.button>
                  ))}
                </div>

                {!Object.values(selectedFeatures).some(v => v) && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded-lg flex gap-3"
                  >
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-500 flex-shrink-0" />
                    <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                      Please select at least one analysis feature to continue.
                    </p>
                  </motion.div>
                )}
              </motion.div>

              {/* Navigation Buttons */}
              <div className="flex justify-between gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(1)}
                  className="px-8 py-3 rounded-xl glass-card border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-horizon-secondary/50 transition-all"
                >
                  Back
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(3)}
                  disabled={!Object.values(selectedFeatures).some(v => v)}
                  className="px-8 py-3 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                >
                  Review <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Review & Process */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass-card p-8"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Review Configuration
                </h2>

                {/* Files Summary */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-horizon-primary" />
                    Files to Process ({selectedFiles.length})
                  </h3>
                  <div className="space-y-2">
                    {selectedFiles.map((item, idx) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-horizon-secondary/30 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-lg bg-gradient-horizon flex items-center justify-center text-white">
                          <Check className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900 dark:text-white">{item.file.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{(item.file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Features Summary */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-horizon-primary" />
                    Selected Analyses
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {features.map(feat => (
                      selectedFeatures[feat.id] && (
                        <motion.div
                          key={feat.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg"
                        >
                          <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
                          <span className="font-medium text-green-900 dark:text-green-200">{feat.title}</span>
                        </motion.div>
                      )
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <AnimatePresence>
                  {isUploading && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-8"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-900 dark:text-white">Processing documents...</span>
                        <span className="text-sm font-bold text-horizon-primary dark:text-horizon-accent.blue">{uploadProgress}%</span>
                      </div>
                      <div className="bg-gray-200 dark:bg-horizon-tertiary rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${uploadProgress}%` }}
                          className="h-full bg-gradient-horizon rounded-full transition-all duration-300"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Action Buttons */}
              <div className="flex justify-between gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setStep(2)}
                  disabled={isUploading}
                  className="px-8 py-3 rounded-xl glass-card border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-horizon-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Back
                </motion.button>
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleReset}
                    disabled={isUploading}
                    className="px-8 py-3 rounded-xl glass-card border border-gray-200/50 dark:border-white/10 text-gray-700 dark:text-gray-200 font-semibold hover:bg-gray-50 dark:hover:bg-horizon-secondary/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Reset
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={processFiles}
                    disabled={isUploading}
                    className="px-8 py-3 rounded-xl bg-gradient-horizon text-white font-semibold shadow-horizon hover:shadow-horizon-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2"
                  >
                    {isUploading ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5" />
                        Process Documents
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success Toast */}
        <AnimatePresence>
          {uploadProgress === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 glass-card px-6 py-4 flex items-center gap-3 shadow-horizon z-50"
            >
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-900 dark:text-white">Documents processed successfully! Redirecting to results...</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UploadPage;
