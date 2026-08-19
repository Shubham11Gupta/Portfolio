import React from 'react'
import { profile } from '../data/portfolio'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative pt-14 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-5xl font-semibold leading-tight"
          >
            {profile.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.12 }}
            className="mt-4 text-slate-300 max-w-xl"
          >
            Software Developer at IBM working across AI automation, backend systems, data engineering, cloud infrastructure, and full-stack applications.
          </motion.p>

          <div className="mt-4 text-sm font-mono text-slate-400">Python · AI/LLMs · Kubernetes · Data Engineering · React · Cloud</div>

          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="btn-primary inline-flex items-center px-4 py-2 rounded-md bg-accent text-black font-semibold">View My Work</a>
            <a href={profile.resume} className="inline-flex items-center px-4 py-2 rounded-md border border-white/6 text-sm">Download Resume</a>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a href={profile.social.github} aria-label="GitHub" className="p-2 rounded-md bg-white/3">
              <Github />
            </a>
            <a href={profile.social.linkedin} aria-label="LinkedIn" className="p-2 rounded-md bg-white/3">
              <Linkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-md bg-white/3">
              <Mail />
            </a>
          </div>
        </div>
        <div className="order-first md:order-last">
          <div className="w-full h-64 md:h-72 rounded-lg bg-gradient-to-br from-white/3 to-transparent border border-white/4 flex items-center justify-center">
            {/* technical animated background placeholder */}
            <svg width="100%" height="100%" viewBox="0 0 600 300" preserveAspectRatio="none" className="opacity-40">
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#5fd3ff" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <g stroke="url(#g1)" strokeWidth="1" fill="none">
                <path d="M10 150 C150 80, 300 220, 590 150" strokeOpacity="0.4" />
                <circle cx="100" cy="140" r="3" fill="#7c5cff" />
                <circle cx="300" cy="160" r="3" fill="#5fd3ff" />
                <circle cx="460" cy="130" r="3" fill="#7c5cff" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
