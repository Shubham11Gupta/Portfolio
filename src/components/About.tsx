import React from 'react'
import { about } from '../data/portfolio'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-14">
      <motion.h2 className="text-2xl font-semibold" initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}}> {about.heading}</motion.h2>
      <motion.p className="mt-4 text-slate-300 max-w-3xl" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}}>
        {about.narrative}
      </motion.p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {about.capabilities.map((c) => (
          <motion.div key={c.title} className="p-4 bg-white/3 rounded-lg border border-white/6" whileHover={{ y: -6 }}>
            <div className="font-semibold">{c.title}</div>
            <ul className="mt-2 text-sm text-slate-300 leading-relaxed">
              {c.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
