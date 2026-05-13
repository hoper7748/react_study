


function App() {
  
  const getPromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        resolve();
      }, 1000);
    }).then(()=>{
      console.log("안녕하세요!");
    })
  }

  getPromise();

  return (
      <>
          
      </>
  )
}

export default App