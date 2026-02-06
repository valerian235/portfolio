import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Info, Github, User, BookOpen, GraduationCap, Zap, Rocket, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children?: React.ReactNode;
}

const HostingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
      >
        <div className="bg-brand-600 p-6 text-white flex justify-between items-center">
          <h3 className="text-xl font-bold flex items-center gap-2">
            <Info className="w-6 h-6" /> Web Hosting & Domains
          </h3>
          <button onClick={onClose} className="hover:bg-brand-700 p-1 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Domain Name</h4>
            <p className="text-gray-600 leading-relaxed">
              Think of a <strong>Domain Name</strong> as your address on the internet (e.g., <code>www.davisnicholas.com</code>). 
              Just like your home address tells people where to find you, a domain name tells a web browser where to look for your website. 
              It represents your identity or brand online.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Web Hosting</h4>
            <p className="text-gray-600 leading-relaxed">
              <strong>Web Hosting</strong> is like the actual house at that address. It is a service provided by companies (hosting providers) 
              that store your website's files (HTML, CSS, images) on powerful computers called servers. These servers are connected to the 
              internet 24/7, making your site accessible to visitors anytime.
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
            <strong>Analogy:</strong> If your website is a store, the <em>Domain Name</em> is the sign above the door, and <em>Web Hosting</em> is the rented building space itself.
          </div>
        </div>
        <div className="p-4 bg-gray-50 flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Close Explanation
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: User },
    { path: '/childhood', label: 'Childhood', icon: BookOpen },
    { path: '/education', label: 'Education', icon: GraduationCap },
    { path: '/skills', label: 'Skills', icon: Zap },
    { path: '/aspirations', label: 'Future', icon: Rocket },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-serif font-bold text-brand-600 tracking-tight">
                DBN<span className="text-slate-400">.</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-brand-50 text-brand-600'
                        : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 p-2 text-slate-400 hover:text-slate-800 transition-colors"
                title="My GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    location.pathname === item.path
                      ? 'bg-brand-50 text-brand-600'
                      : 'text-slate-600 hover:text-brand-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Davis Brendan Nicholas. Built with React & Tailwind.
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-sm text-brand-600 hover:text-brand-700 font-medium flex items-center gap-1 hover:underline"
              >
                <Info className="w-4 h-4" />
                Explain Hosting & Domain
              </button>
              <div className="flex space-x-4">
                <a href="#" className="text-slate-400 hover:text-brand-600">
                  <span className="sr-only">GitHub</span>
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <HostingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}