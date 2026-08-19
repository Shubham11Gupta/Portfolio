import React from 'react'
import { currentlyExploring } from '../data/portfolio'

export default function CurrentlyExploring() {
  return (
    <section id="exploring" className="py-12">
      <h3 className="text-xl font-semibold">Currently Exploring</h3>
      <div className="mt-3 flex flex-wrap gap-2">
        {currentlyExploring.map((c) => (
          <div key={c} className="px-3 py-2 bg-white/4 rounded-md text-sm text-slate-200">{c}</div>
        ))}
      </div>
    </section>
  )
}
