import React, { useState } from 'react'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className="App">
      <h1>{`Is dark (react)? ${isDark}`}</h1>
      <WebComponentHere isDark={isDark} />
      <button onClick={() => setIsDark(d => !d)}>toggle</button>
      <div class="portal-target"></div>
    </div>
  )
}

export default App
