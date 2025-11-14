import React, { useState, useRef } from "react";
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
  Brain
} from "lucide-react";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = (file) => {
    setSelectedFile(file);
    setUploadProgress(0);
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
      handleFileChange(files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files.length > 0) {
      handleFileChange(e.target.files[0]);
    }
  };

  const simulateUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsUploading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleReset = () => {
    setSelectedFile(null);
    setUploadProgress(0);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const fileTypes = [
    { type: "PDF", icon: <FileText className="w-4 h-4" />, color: "bg-red-100 text-red-600" },
    { type: "DOCX", icon: <FileText className="w-4 h-4" />, color: "bg-blue-100 text-blue-600" },
    { type: "TXT", icon: <FileText className="w-4 h-4" />, color: "bg-gray-100 text-gray-600" },
  ];

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered NER",
      description: "Extract financial entities using advanced NLP"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Smart Analysis",
      description: "Automatic financial data visualization"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Processing",
      description: "Your data is protected and private"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50/30 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl"
          >
            <Upload className="w-8 h-8 text-white" />
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Upload Financial Documents
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload SEC filings, earnings reports, or financial articles for AI-powered entity extraction
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Upload Card */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden"
            >
              {/* Upload Area */}
              <div
                className={`p-8 transition-all duration-300 ${
                  isDragging ? "bg-green-50 border-green-200" : "bg-white"
                } border-2 border-dashed rounded-2xl m-6 ${
                  isDragging ? "border-green-400 scale-105" : "border-gray-300"
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileInput}
                  accept=".txt,.pdf,.docx"
                  className="hidden"
                />
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-green-600" />
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {!selectedFile ? (
                      <motion.div
                        key="upload-prompt"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Drag & Drop your file
                        </h3>
                        <p className="text-gray-600 mb-6">
                          or <span className="text-green-600 font-semibold">browse files</span>
                        </p>
                        <button
                          onClick={() => fileInputRef.current?.click()}
                          className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                          Choose File
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="file-selected"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                      >
                        <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-200">
                          <FileText className="w-8 h-8 text-green-600" />
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900">{selectedFile.name}</h4>
                            <p className="text-sm text-gray-600">
                              {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                          <button
                            onClick={handleReset}
                            className="p-2 hover:bg-red-100 rounded-full transition-colors"
                          >
                            <X className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress Bar */}
              <AnimatePresence>
                {isUploading && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6"
                  >
                    <div className="bg-gray-100 rounded-full h-3 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${uploadProgress}%` }}
                        className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300"
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600 mt-2">
                      <span>Processing...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={simulateUpload}
                    disabled={!selectedFile || isUploading}
                    className="flex-1 bg-gradient-to-r from-green-500 to-blue-500 text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isUploading ? (
                      <RefreshCw className="w-5 h-5 animate-spin" />
                    ) : (
                      <Zap className="w-5 h-5" />
                    )}
                    {isUploading ? "Processing..." : "Extract Entities"}
                  </motion.button>
                  
                  <button
                    onClick={handleReset}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-semibold hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <RefreshCw className="w-5 h-5" />
                    Reset
                  </button>
                </div>
              </div>
            </motion.div>

            {/* File Types Support */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Supported File Types
              </h3>
              <div className="flex gap-3">
                {fileTypes.map((fileType, index) => (
                  <motion.div
                    key={fileType.type}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl ${fileType.color} font-medium`}
                  >
                    {fileType.icon}
                    {fileType.type}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Features Sidebar */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl p-6 text-white shadow-2xl"
            >
              <h3 className="text-xl font-bold mb-4">What happens next?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <span>AI processes your document</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <span>Extracts financial entities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <span>Generates insights dashboard</span>
                </li>
              </ul>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-4">AI-Powered Features</h3>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-xs">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Demo Notice */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4"
            >
              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-yellow-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-yellow-800 text-sm">Demo Mode</h4>
                  <p className="text-yellow-700 text-xs mt-1">
                    This is a demonstration. No actual files are uploaded or processed.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {uploadProgress === 100 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3"
            >
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Document processed successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default UploadPage;