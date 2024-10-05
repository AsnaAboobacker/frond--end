import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Addemp from './components/Addemp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome REACT</h1>
      <Routes>
        <Route path="/add" element={<Addemp/>} ></Route>
      </Routes>
    </>
  )
}

export default App
