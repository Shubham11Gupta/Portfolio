import React from 'react'
import { experience } from '../data/portfolio'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-14">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-6 space-y-6">
        {experience.map((exp) => (
          <div key={exp.role} className="p-4 bg-white/3 rounded-lg border border-white/6">
            <div className="flex items-start justify-between">
              <div>
                <div className="font-semibold">{exp.company} — {exp.role}</div>
                <div className="text-sm text-slate-400">{exp.range} · {exp.location}</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {exp.projects.map((p) => (
                <motion.div key={p.title} className="p-4 bg-black/40 rounded-md border border-white/5" whileHover={{ scale: 1.01 }}>
                  <div className="flex items-center justify-between">
                    <div className="font-medium">{p.title}</div>
                    <div className="text-xs font-mono text-slate-400">{p.stack.join(' · ')}</div>
                  </div>
                  <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
                  <div className="mt-3 text-sm text-accent font-semibold">{p.highlight}</div>
                  {p.metric && (
                    <div className="mt-3 bg-gradient-to-r from-emerald-500/20 to-transparent p-3 rounded-md inline-block">
                      <div className="text-sm font-mono">{p.metric.reduction}</div>
                      <div className="text-xs text-slate-300">{p.metric.before} → {p.metric.after}</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
