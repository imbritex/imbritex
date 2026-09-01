import React from 'react'
import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Projects />
      </main>
    </div>
  )
}

export default App
