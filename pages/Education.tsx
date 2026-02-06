import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Book, Calendar, Trophy, Medal } from 'lucide-react';

const EducationCard = ({ title, institution, year, description, type }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-lg ${type === 'school' ? 'bg-brand-100 text-brand-600' : 'bg-amber-100 text-amber-600'}`}>
        {type === 'school' ? <GraduationCap className="w-6 h-6" /> : <Award className="w-6 h-6" />}
      </div>
      <span className="inline-flex items-center text-sm font-medium text-slate-400 bg-slate-50 px-2 py-1 rounded">
        <Calendar className="w-3 h-3 mr-1" /> {year}
      </span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-1">{title}</h3>
    <h4 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">{institution}</h4>
    <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default function Education() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-serif font-bold text-slate-900">Academic Journey</h2>
        <p className="mt-4 text-lg text-slate-600">From St. Paul's Academy to University of Kirinyaga.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Timeline */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-6">
            <Book className="w-5 h-5 text-brand-600" />
            <h3 className="text-xl font-bold text-slate-900">Education History</h3>
          </div>
          
          <div className="relative border-l-2 border-slate-200 ml-3 space-y-8 pl-8 pb-4">
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-brand-600 border-4 border-white shadow-sm"></span>
              <EducationCard 
                title="Software Engineering"
                institution="University of Kirinyaga"
                year="Year 2 (Current)"
                description="Currently pursuing a degree in Software Engineering. Diving deep into advanced programming, systems design, and AI technologies."
                type="school"
              />
            </div>

            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-slate-400 border-4 border-white shadow-sm"></span>
              <EducationCard 
                title="Secondary Education"
                institution="The Great Kericho High School"
                year="Form 1 - Form 4"
                description="Admitted to this prestigious school after performing well in primary exams. I excelled academically, particularly in sciences and mathematics."
                type="school"
              />
            </div>
            
            <div className="relative">
              <span className="absolute -left-[41px] top-1 h-6 w-6 rounded-full bg-slate-300 border-4 border-white shadow-sm"></span>
              <EducationCard 
                title="Primary Education"
                institution="St. Paul's Academy"
                year="Early Childhood - Grade 8"
                description="Completed my early childhood and primary education here. I passed well, which paved the way for my admission to a top secondary school."
                type="school"
              />
            </div>
          </div>
        </div>

        {/* Extracurriculars */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 mb-6">
            <Trophy className="w-5 h-5 text-amber-600" />
            <h3 className="text-xl font-bold text-slate-900">Achievements & Activities</h3>
          </div>

          <div className="grid gap-6">
             <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" /> Academic Excellence
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  I was consistently at the top of my class, receiving numerous awards in:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-100">Physics (Top Student)</span>
                  <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-100">Mathematics (Top Student)</span>
                  <span className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full border border-amber-100">Geography</span>
                </div>
             </div>

             <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl text-white shadow-lg">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Medal className="w-5 h-5 text-brand-400" /> Extracurricular Activities
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                  I believe in a balanced life. In school, I was actively involved in sports:
                </p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> <strong>Football:</strong> Active team player</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-500"></div> <strong>Volleyball:</strong> Participated in competitive matches</li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}