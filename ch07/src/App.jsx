import { useEffect, useState } from 'react'

function App() {
  const [currentId, setCurrentId] = useState(0);
  const[inputValue, setInputValue] = useState("");
  const[data, setData] = useState([
  ]);

  console.log(currentId);
  console.log(data  );

  const HandleAddOnCklick = (e) =>  {
    setCurrentId(currentId + 1);
  }
  
  useEffect(() =>{
    console.log("유즈이펙트 호출")
    if(currentId!==0){
      setData([...data, {id: currentId, num: inputValue}]); 
    }
  }, [currentId]);

  return (
    <>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={HandleAddOnCklick}>추가</button>
      <ul>
          {data.map((d, index)=> <li key={d.id}>{d.num}</li>)}
          
      </ul>
    </>
  )
}

export default App
