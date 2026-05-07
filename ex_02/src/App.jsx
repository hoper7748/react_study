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
  return (
    <div>
      <h2>HOME</h2>
    </div>);
}

function Profile(){
  console.log("Profile");
  return (
  <>
    <div>
      <h2>Profile</h2>
    </div>
  </>);
}

function Setting() {
  console.log("Setting");
  return(
  <>
    <div>
      <h2>Setting</h2>
    </div>
  </>);
}

export default App
