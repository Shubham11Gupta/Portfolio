import React from 'react'
import { profile } from '../data/portfolio'
import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/6">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="text-slate-100 font-semibold">{profile.name}</div>
          <div className="hidden md:inline-flex items-center text-xs text-emerald-400/80 gap-2">
            <span className="text-emerald-400">●</span>
            <span className="opacity-80 text-sm">{profile.status}</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-200">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="md:hidden">
          <button aria-label="menu" className="p-2 rounded-md bg-white/5">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}
