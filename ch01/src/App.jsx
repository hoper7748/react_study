import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { renderToString } from 'react-dom/server'
import { useFormState } from 'react-dom'

function App() {
  // const [count, setCount] = useState(0)
  const [name, setname] = [ 10, (n) => {} ]    // 구조 분해 또는 구조적 할당이라고 한다. [n = name / setName = (n) => {}]

  // const numberState= useState(0);
  // const number = numberState[0]
  // const SetNumber = numberState[1];

  const [number, setNumber] = useState(10);

  const handleOnClick = () => {
    // number ++;
    // console.log(number);
    // numberState[1] (number + 10);
    setNumber(number + 10);
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleOnClick}>증가</button>
    </div>
  )
}

export default App
