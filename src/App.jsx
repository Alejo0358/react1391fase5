import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Fase 5: Operar</h1>
      <h2><u>INTEGRANTES</u></h2>

      <p className="read-the-docs">
        <h3>Alejandro Bacca</h3>
        <h3>Integrante 2</h3>
        <h3>Integrante 3</h3>
        <h3>Integrante 4</h3>
        <h3>Integrante 5</h3>
      </p>

       <a href="index1.html">Clic aqui para ir al proyecto</a>
    </>
  )
}

export default App
