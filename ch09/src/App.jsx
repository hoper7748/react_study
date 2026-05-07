import { useEffect, useState } from 'react'

function Box1(){
  useEffect(() => {
    console.log("Box1 컴포넌트 장착");
    return () => {
      console.log("Box1 컴포넌트 장착해제");
    }
  })
  console.log("Box1 컴포넌트 호출");

  return <div>
    <h2>box</h2>
  </div>

}

function App() {

  const [ show, setShow] = useState(false);

  useEffect(() => {
    console.log("App 컴포넌트 장착");
  });

  console.log("App 컴포넌트 호출");
  
  const handleShowOnclick =()=>{
    setShow(!show);
  }

  return (
    <>
      <h1>App 컴포넌트</h1>
      <button onClick={handleShowOnclick}>{show ? "숨기기" : "보이기"}</button>
      {show && <Box1 />}
    </>
  )
}

export default App
