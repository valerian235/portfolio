import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Cpu, Briefcase, Zap } from 'lucide-react';

const GoalCard = ({ icon: Icon, title, text, color, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.6 }}
    className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-transparent hover:border-brand-500 transition-all group"
  >
    <div className={`p-4 rounded-full inline-block mb-6 ${color} group-hover:scale-110 transition-transform`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-lg">
      {text}
    </p>
  </motion.div>
);

export default function Aspirations() {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-900/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-indigo-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Future Horizons
          </motion.h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            "Imagining a world where Software, AI, and Nanotech converge."
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <GoalCard 
            icon={Briefcase}
            title="Software & AI Integration"
            text="I intend to dive deeper into software development and AI, exploring how advanced algorithms can solve real-world problems. My focus is on the seamless integration of intelligent code with physical hardware."
            color="bg-blue-600"
            delay={0.1}
          />
          <GoalCard 
            icon={Cpu}
            title="Nanotech & Drones"
            text="I am fascinated by the potential of integrating AI with nanotechnology and drone systems. I envision a future where autonomous drones and microscopic tech work in harmony."
            color="bg-emerald-500"
            delay={0.2}
          />
          <GoalCard 
            icon={Rocket}
            title="The OpenAI Dream"
            text="My ultimate dream is to establish an AI building company that rivals giants like OpenAI. I want to be at the forefront of creating general artificial intelligence that benefits humanity."
            color="bg-purple-600"
            delay={0.3}
          />
          <GoalCard 
            icon={Zap}
            title="Innovation"
            text="I aim to drive innovation by combining my skills in programming and data analysis to build systems that were once thought impossible."
            color="bg-rose-500"
            delay={0.4}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Current Focus</h3>
          <p className="text-slate-300 text-lg">
            Building the foundations in Java, Python, and Mathematics to make these dreams a reality.
          </p>
        </motion.div>
      </div>
    </div>
  );
}