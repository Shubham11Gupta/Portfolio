import React from 'react'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-8">
      <h3 className="text-lg font-semibold">Education</h3>
      <div className="mt-2 text-slate-300">
        <div className="font-medium">{education.school}</div>
        <div className="text-sm">{education.degree} · {education.range}</div>
      </div>
    </section>
  )
}
