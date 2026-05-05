import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

const handleUpOnClick = () => {
  setCount(count + 1);
}

const handleDownOnClick = () => {
  setCount(count - 1);
}

  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={handleUpOnClick}>증가</button>
      <button onClick={handleDownOnClick}>감소</button>
    </div>
    </>
  )
}

export default App
