import React from 'react'
import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="py-14">
      <h2 className="text-2xl font-semibold">Let's build something interesting.</h2>
      <p className="mt-3 text-slate-300 max-w-2xl">I'm interested in building intelligent systems, developer tools, scalable backend services, and products that solve real problems.</p>
      <div className="mt-6 flex gap-3">
        <a href={`mailto:${profile.email}`} className="px-4 py-2 rounded-md bg-accent text-black font-semibold">Email Me</a>
        <a href={profile.social.github} className="px-4 py-2 rounded-md bg-white/5">GitHub</a>
        <a href={profile.social.linkedin} className="px-4 py-2 rounded-md border border-white/6">LinkedIn</a>
      </div>
      <div className="mt-4 text-sm text-slate-400">{profile.email}</div>
    </section>
  )
}
