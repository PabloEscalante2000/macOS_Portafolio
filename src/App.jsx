import { Dock, Navbar, Welcome } from '#components'
import React from 'react'
import { Draggable } from 'gsap/Draggable'
import gsap from 'gsap'
import { Terminal } from '#windows'

gsap.registerPlugin(Draggable)

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal/>
    </main>
  )
}

export default App