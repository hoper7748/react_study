import { useEffect, useState } from 'react'

function App() {
  const [state1, setState1] = useState(10);
  const [state2, setState2] = useState(20);
  const [state3, setState3] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [isFetching, setFetching] = useState(true); 

  const handleOnClick = () =>{
    setState1( state1 * 10);      // state1 === 100;
    setFetching(!isFetching);
    setClicked(!clicked);
  }

  useEffect(() => {
    if(clicked){
      setState2( state1 + state2);  // state2 === 120
    };
  }, [state1]);

  useEffect(() => {
    if(clicked)
    {
      setState3( state1 + state2);  // state3 === 220;
      setClicked(false);
    }
  }, [state2]);

  return (
    <>
    <button onClick={handleOnClick}>실행</button>
    {
      isFetching || <>
        <h1>{state1}</h1>
        <h1>{state2}</h1>
        <h1>{state3}</h1>
      </>
    }
    <h1>{state1}</h1>
    <h1>{state2}</h1>
    <h1>{state3}</h1>
    </>
  )
}

export default App
