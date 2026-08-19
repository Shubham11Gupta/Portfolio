import React from 'react'
import { certifications } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" className="py-8">
      <h3 className="text-lg font-semibold">Certifications & Training</h3>
      <div className="mt-3 flex gap-3 flex-wrap text-sm text-slate-300">
        {certifications.map((c) => (
          <div key={c} className="px-3 py-2 bg-black/30 rounded-md">{c}</div>
        ))}
      </div>
    </section>
  )
}
