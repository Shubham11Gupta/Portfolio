import React from 'react'
import { motion } from 'framer-motion'

const steps = ['Idea', 'Prototype', 'Backend / APIs', 'Data / AI', 'Infrastructure', 'Deployment']

export default function HowIBuild() {
  return (
    <section id="how" className="py-14">
      <h2 className="text-2xl font-semibold">How I build</h2>
      <div className="mt-8 flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1">
          <div className="space-y-4">
            {steps.map((s, i) => (
              <motion.div key={s} initial={{opacity:0, x:-8}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="p-4 bg-white/3 rounded-md border border-white/6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-black font-semibold">{i+1}</div>
                <div>
                  <div className="font-medium">{s}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3 p-6 bg-black/40 rounded-md border border-white/5">
          <div className="text-sm text-slate-300">Pipeline flow</div>
          <svg width="100%" height="140" viewBox="0 0 200 140" className="mt-3 opacity-60">
            <polyline points="10,10 190,10 190,130 10,130" stroke="#7c5cff" fill="none" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  )
}
