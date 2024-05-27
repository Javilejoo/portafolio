import { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'

import './App.css'

function App() {
  return (
    <div>
    <Header />
    <main>
      <section id="About">
        <About />
      </section>
    </main>
  </div>
);
}

export default App
