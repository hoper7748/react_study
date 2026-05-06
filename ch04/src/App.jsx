import {useState } from'react'

function App() {
  const [text ,setText] = useState();
  const [text2 ,setText2] = useState();
  const [tempText, setTemp] = useState();
  const [tempText2, setTemp2] = useState();
  
  function check (e) {
      setText(tempText);
      setText2(tempText2);
  }
  function ChangeText2(e){
    setTemp2(e.target.value)
  }
  function ChangeText1 (e){
    setTemp(e.target.value);
  }

  return (
    <>
    <input type="text" onChange={ChangeText1}/>
    <input type="text" onChange={ChangeText2}/>
    <button onClick={check}>출력</button>
    <h1>내용: {text}</h1>
    <h1>내용: {text2}</h1>
    </>
  )
}

export default App
