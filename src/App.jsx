import { Routes, Route, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Results from "./pages/Results";
import About from "./pages/About";
import Chatbot from "./pages/Chatbot";

import { ChatbotButton, ChatbotWindow } from "./components/chatbot";
import { useState } from "react";
import { SignedIn } from "@clerk/clerk-react";

export default function App() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <motion.div
          key={location.pathname}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/upload" 
              element={
                <ProtectedRoute>
                  <Upload />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/results" 
              element={
                <ProtectedRoute>
                  <Results />
                </ProtectedRoute>
              } 
            />
            <Route path="/about" element={<About />} />
            <Route path="/chatbot" element={<Chatbot />} />
          </Routes>
        </motion.div>
      </main>

      {/* Only show chatbot for authenticated users */}
      <SignedIn>
        <ChatbotButton onToggle={() => setOpen(!open)} />
        <ChatbotWindow isOpen={open} />
      </SignedIn>

      <Footer />
    </div>
  );
}
