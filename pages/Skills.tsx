import React from 'react';
import { motion } from 'framer-motion';
import { Code, Terminal, Layers, Cpu, Shield, Zap } from 'lucide-react';

const SkillBar = ({ name, level, color }: { name: string, level: number, color: string }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-slate-700">{name}</span>
      <span className="text-sm font-medium text-slate-500">{level}%</span>
    </div>
    <div className="w-full bg-slate-200 rounded-full h-2.5">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`h-2.5 rounded-full ${color}`}
      ></motion.div>
    </div>
  </div>
);

const TalentCard = ({ icon: Icon, title, description }: any) => (
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center text-center"
  >
    <div className="p-4 bg-slate-50 rounded-full mb-4 text-slate-700">
      <Icon className="w-8 h-8" />
    </div>
    <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
    <p className="text-sm text-slate-500">{description}</p>
  </motion.div>
);

export default function Skills() {
  return (
    <div className="bg-slate-50 py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-serif font-bold text-slate-900 mb-4">Skills & Abilities</h2>
          <p className="text-lg text-slate-600">
            A combination of strong technical expertise in programming and resilient personal character traits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Code className="w-6 h-6 text-brand-600" /> Programming Proficiency
            </h3>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <SkillBar name="Java" level={90} color="bg-orange-600" />
              <SkillBar name="Python" level={85} color="bg-blue-500" />
              <SkillBar name="JavaScript" level={88} color="bg-yellow-500" />
              <SkillBar name="Web Development" level={92} color="bg-purple-500" />
              <SkillBar name="Data Analysis" level={75} color="bg-emerald-500" />
            </div>
          </div>

          {/* Soft Skills & Talents */}
          <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-8 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-rose-600" /> Personal Attributes
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <TalentCard 
                icon={Zap} 
                title="Adaptability" 
                description="I can adjust quickly to new environments and evolving technologies, ensuring I stay effective."
              />
              <TalentCard 
                icon={Shield} 
                title="Resilience" 
                description="I possess the mental toughness to persevere through challenges and bounce back from setbacks."
              />
              <TalentCard 
                icon={Terminal} 
                title="Problem Solving" 
                description="Strong analytical skills sharpened by a background in Physics and Mathematics."
              />
               <TalentCard 
                icon={Layers} 
                title="Web Developer" 
                description="Passionate about creating functional and aesthetically pleasing web applications."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}