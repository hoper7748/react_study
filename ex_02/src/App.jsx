import { Profiler, useState } from 'react'

function App() {
  const [currentPage, setCurrentPage] = useState ();
  
  const handlePageButtonOnClick = (e) => {
    setCurrentPage(e.target.value);
  } 

  return (
    <>
      <header>
        <button value={"home"} onClick={handlePageButtonOnClick}>Home</button>
        <button value={"profile"} onClick={handlePageButtonOnClick}>Profile</button>
        <button value={"setting"} onClick={handlePageButtonOnClick}>Setting</button>
      </header>
      <main>
        {currentPage === "home" && <Home />}
        {currentPage === "profile" && <Profile />}
        {currentPage === "setting" && <Setting />}
      </main>
    </>
  )
}

function Home() {
  console.log("Home");
  return;
}

function Profile(){
  console.log("Profile");
  return ;
}

function Setting() {
  console.log("Setting");
  return;
}

export default App
