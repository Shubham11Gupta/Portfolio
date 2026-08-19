import React from 'react'
import { projects } from '../data/portfolio'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <section id="projects" className="py-14">
      <h2 className="text-2xl font-semibold">Things I've built</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj) => (
          <motion.div key={proj.name} className="p-6 bg-white/3 rounded-lg border border-white/6" whileHover={{ y: -6 }}>
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold text-lg">{proj.name}</div>
                <div className="text-xs text-slate-400">{proj.date}</div>
              </div>
              <div className="text-sm font-mono text-slate-400">{proj.stack.join(' · ')}</div>
            </div>
            <p className="mt-4 text-slate-300">{proj.description}</p>
            <div className="mt-4 flex items-center gap-3">
              <a href={proj.github} className="px-3 py-2 rounded-md bg-white/5 text-sm">GitHub</a>
              <a href={proj.demo} className="px-3 py-2 rounded-md border border-white/6 text-sm">View Project</a>
            </div>
            {proj.visual && (
              <pre className="mt-4 font-mono text-xs text-slate-400 bg-black/30 p-3 rounded-md overflow-auto">{proj.visual.join('\n')}</pre>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
