import React from 'react'
import { metrics } from '../data/portfolio'

export default function Metrics() {
  return (
    <section id="metrics" className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-4 bg-white/3 rounded-md text-center">
          <div className="text-2xl font-semibold">{metrics.airflowReduction}</div>
          <div className="text-sm text-slate-300">Airflow runtime reduction</div>
        </div>
        <div className="p-4 bg-white/3 rounded-md text-center">
          <div className="text-2xl font-mono">{metrics.timeBefore} → {metrics.timeAfter}</div>
          <div className="text-sm text-slate-300">Pipeline execution time</div>
        </div>
        <div className="p-4 bg-white/3 rounded-md text-center">
          <div className="text-2xl font-semibold">{metrics.projects}+</div>
          <div className="text-sm text-slate-300">Major engineering projects</div>
        </div>
        <div className="p-4 bg-white/3 rounded-md text-center">
          <div className="text-2xl font-mono">{metrics.focus}</div>
          <div className="text-sm text-slate-300">Core engineering focus</div>
        </div>
      </div>
    </section>
  )
}
