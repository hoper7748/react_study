import { useState } from "react"

function App() {
  const [value0, setValue0] = useState()
  const [value1, setValue1] = useState()
  const [value2, setValue2] = useState()
  const [value3, setValue3] = useState()

  const handleOnChange = (e) =>{
    switch (e.target.name){
      case 'input1':
        setValue0(e.target.value);
        break;
      case 'input2':
        setValue1(e.target.value);
        break;
      case 'input3':
        setValue2(e.target.value);
        break;
      case 'input4':
        setValue3(e.target.value);
        break;
    }
    console.log(e.target.name);
    console.log(e.target.value);
    // setValue(e.target.value);
  }

  const [inputValue, setInputValue] = useState({
    input1: "",
    input2: "",
    input3: "",
    input4: "",
  });

  const handleOnChange2 = (e) => {
    const newInputValue = {
      ...inputValue,
      [e.target.name]: e.target.value,
    };
    setInputValue(newInputValue);
  }

  return (
    <>
    <input type="text" name="input1" value = {inputValue.input1} onChange={handleOnChange2}/>
    <input type="text" name="input2" value = {inputValue.input2} onChange={handleOnChange2}/>
    <input type="text" name="input3" value = {inputValue.input3} onChange={handleOnChange2}/>
    <input type="text" name="input4" value = {inputValue.input4} onChange={handleOnChange2}/>
    
    <h1>출력1: {inputValue.input1} </h1>
    <h1>출력2: {inputValue.input2}</h1>
    <h1>출력3: {inputValue.input3}</h1>
    <h1>출력4: {inputValue.input4}</h1>

    <hr />

    <input type="text" name="input1" value = {value0} onChange={handleOnChange}/>
    <input type="text" name="input2" value = {value1} onChange={handleOnChange}/>
    <input type="text" name="input3" value = {value2} onChange={handleOnChange}/>
    <input type="text" name="input4" value = {value3} onChange={handleOnChange}/>
    
    <h1>출력1: {value0} </h1>
    <h1>출력2: {value1}</h1>
    <h1>출력3: {value2}</h1>
    <h1>출력4: {value3}</h1>


    </>
  )
}

export default App
