import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="font-bold text-3xl text-center py-3">
        <h1>My Blog</h1>
      </div>
    </>
  )
}

export default App
