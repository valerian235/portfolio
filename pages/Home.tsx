import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
} as const;

export default function Home() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-600 text-sm font-semibold tracking-wide uppercase">
            Future AI Designer & Data Analyst
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">Davis Brendan Nicholas</span>.
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            My interests lie in building an <strong>AI-driven future</strong>. I am currently dedicated to becoming an expert AI Designer and Data Analyst, aiming to bridge the gap between human creativity and machine intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brand-600 hover:bg-brand-700 transition-colors">
              Get in Touch
            </Link>
            <Link to="/education" className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors">
              View My Journey
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-200 mt-8">
            <div className="flex flex-col items-center text-center p-2">
              <div className="bg-blue-50 p-3 rounded-full mb-2 text-brand-600">
                <Brain className="w-6 h-6" />
              </div>
              <span className="font-semibold text-slate-900">AI Design</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <div className="bg-rose-50 p-3 rounded-full mb-2 text-rose-500">
                <BarChart className="w-6 h-6" />
              </div>
              <span className="font-semibold text-slate-900">Data Analysis</span>
            </div>
            <div className="flex flex-col items-center text-center p-2">
              <div className="bg-emerald-50 p-3 rounded-full mb-2 text-emerald-500">
                <Code className="w-6 h-6" />
              </div>
              <span className="font-semibold text-slate-900">Development</span>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute top-0 right-0 w-full h-full bg-brand-200 rounded-full blur-3xl opacity-30 transform translate-x-10 -translate-y-10"></div>
            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-indigo-200 rounded-full blur-3xl opacity-30 transform -translate-x-10 translate-y-10"></div>
            <img 
              src="https://picsum.photos/800/800" 
              alt="Davis Brendan Nicholas Portrait" 
              className="relative rounded-2xl shadow-2xl w-full h-full object-cover border-4 border-white"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}