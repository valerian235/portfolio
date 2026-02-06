import React from 'react';
import { motion } from 'framer-motion';
import { Home, Users, Heart } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Childhood() {
  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">My Origins</h2>
          <p className="mt-2 text-3xl leading-8 font-serif font-bold tracking-tight text-slate-900 sm:text-4xl">
            Roots in Kisii, Kenya
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            A story of a boy from the suburbs, raised with love and strong values.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-12"
        >
          {/* Memory 1 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-brand-50 flex items-center justify-center p-8">
              <img src="https://picsum.photos/400/400?grayscale" alt="Kisii Suburbs" className="rounded-lg shadow-md mix-blend-multiply" />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Home className="w-6 h-6 text-brand-500" />
                <h3 className="text-2xl font-bold text-slate-800">The Kisii Suburbs</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                I grew up in the suburbs of Kisii, Kenya, in a humble background. It was here that I learned the value of simplicity and community. 
                Being raised by a single mother taught me resilience early on, and watching her work hard for our family remains my biggest inspiration.
              </p>
            </div>
          </motion.div>

          {/* Memory 2 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row-reverse">
            <div className="md:w-1/3 bg-indigo-50 flex items-center justify-center p-8">
              <img src="https://picsum.photos/401/401?grayscale" alt="Grandparents" className="rounded-lg shadow-md mix-blend-multiply" />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center text-right md:text-left">
              <div className="flex items-center gap-3 mb-4 md:flex-row-reverse">
                <Users className="w-6 h-6 text-indigo-500" />
                <h3 className="text-2xl font-bold text-slate-800">Shaped by Grandparents</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                My grandparents played a crucial role in my upbringing. They shaped my personality, teaching me to be a gentleman in every sense of the word. 
                Their guidance instilled in me manners, respect, and a strong sense of responsibility toward others.
              </p>
            </div>
          </motion.div>

          {/* Memory 3 */}
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-emerald-50 flex items-center justify-center p-8">
              <img src="https://picsum.photos/402/402?grayscale" alt="Family Time" className="rounded-lg shadow-md mix-blend-multiply" />
            </div>
            <div className="md:w-2/3 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-emerald-500" />
                <h3 className="text-2xl font-bold text-slate-800">Family Interaction</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Despite our humble beginnings, we had excellent family interaction. I was surrounded by love and support, which gave me the confidence to pursue my dreams.
                These early years defined my character and grounded me in values that I carry with me today.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
}