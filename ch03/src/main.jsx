import { useState } from 'react'
import { createRoot } from 'react-dom/client'


function App(){

  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  const [Data, setData] = useState("");
  const handleOnChange = (e) =>{
    console.log(e.target.value + e.id);
    setData(e.target.value);
  }
  return <>
    <input type="text" onChange={handleOnChange} />
    <h1>출력: {Data}</h1>
    <InputGroup setName={setName} setPass={setPass}/>
    <OutputGroup name={name} pass={pass} />
  </>
}

function OutputGroup({name, pass}){
  // 여긴 뭐하는 곳일까?

  return <div>
    <h1>사용자이름: {name} </h1>
    <h1>비밀번호: {pass}</h1>
  </div>
}

function InputGroup({setName, setPass}){
  return <div>
    <LabelInput title={'사용자이름'} id={'username'} type={'text'} onChange={setName}/>
    <LabelInput title={'비밀번호'} id={'password'} type={'password'} onChange={setPass}/>
  </div>
}

function LabelInput({title, id, type, onChange}){

  const handleOnChange = (e ) =>{
    console.log(e.target.value + "  " + e.target.id);
    onChange(e.target.value);
  }

  return <div>
    <label htmlFor={id}>{title}</label>
    <input type={type} id={id} onChange={handleOnChange} />
  </div>
}


createRoot(document.getElementById('root')).render(<App />
)
