import { resumeAndPrerenderToNodeStream } from "react-dom/static";

function App() {
  new Promise((resolve, reject) => {
    console.log(7);
    if(true)
      resolve("성공데이터");
    else 
      reject(new Error("실패데이터"));
  }).then((resolve) => {
    console.log(9);
    console.error(resolve);
  }).catch((reject) => {
    console.log(8);
    console.log(reject);
  }).finally(() =>{

  });
    new Promise((resolve, reject) => {
    console.log(10);
    if(false)
      resolve();
    else 
      reject();
  }).then(() => {
    console.log(11);
  }).catch(() => {
    console.log(12);
  }).finally(() =>{

  });


  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);

  setTimeout(() => {
    console.log(5);
  }, 5000);

  
  return (
      <>
        홈  
      </>
  )
}

export default App