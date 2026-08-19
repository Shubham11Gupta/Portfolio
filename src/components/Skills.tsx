import React from 'react'
import { skills } from '../data/portfolio'
import { motion } from 'framer-motion'

function SkillList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-semibold">{title}</div>
      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-slate-300">
        {items.map((it) => (
          <motion.div key={it} whileHover={{ scale: 1.02 }} className="p-2 bg-black/30 rounded-md">{it}</motion.div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-14">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillList title="Languages" items={skills.languages} />
        <SkillList title="Frameworks" items={skills.frameworks} />
        <SkillList title="AI / Data" items={skills.ai} />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkillList title="Infrastructure" items={skills.infra} />
        <SkillList title="Tools" items={skills.tools} />
        <div></div>
      </div>
    </section>
  )
}
