import { useState } from 'react'
import logo from '/logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  //https://www.youtube.com/watch?v=fZPgBnL2x-Q <- sustand tut

  return (
    <>
      <div>
      <img src={logo} alt="logo"/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
