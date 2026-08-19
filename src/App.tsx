import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import HowIBuild from './components/HowIBuild'
import Skills from './components/Skills'
import Metrics from './components/Metrics'
import CurrentlyExploring from './components/CurrentlyExploring'
import Certifications from './components/Certifications'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-slate-100 antialiased">
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-0">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <HowIBuild />
        <Skills />
        <Metrics />
        <CurrentlyExploring />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
