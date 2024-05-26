import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'

import './App.css'

function App() {
  return (
    <div>
    <Header />
    <main>
      <section id="home">
        <Home />
      </section>
    </main>
  </div>
);
}

export default App
