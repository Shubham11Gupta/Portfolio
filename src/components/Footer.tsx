import React from 'react'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-white/6 bg-black/30">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 flex items-center justify-between text-sm">
        <div>{profile.name}</div>
        <div className="flex gap-3">
          <a href={profile.social.github}>GitHub</a>
          <a href={profile.social.linkedin}>LinkedIn</a>
          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
        <div>© 2026 Shubham Gupta · Built with React + TypeScript</div>
      </div>
    </footer>
  )
}
