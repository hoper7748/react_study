import { useState } from 'react'

function App() {

  const [students, setStudent] = useState([   
  ]);

  const [currentPage, setCurrentPage] = useState("");
  // const [pages, setPages ] = useState({
  //   number: <Number />,
  //   table: <Table />,
  //   table2: <Table2 students={students} setStudent={setStudent}  />,
  // })

  const handlePageButtonOnClick = (e) => {
    // setCurrentPage(pages[e.target.value]);
      setCurrentPage(e.target.value);
  }

  return (
    <>
    <header>
      <button value={"number"} onClick={handlePageButtonOnClick}>Number</button>
      <button value={"table"} onClick={handlePageButtonOnClick}>Table</button>
      <button value={"table2"} onClick={handlePageButtonOnClick}>Table2</button>
    </header>
    <main>
        {currentPage === "number" && <Number />}
        {currentPage === "table" && <Table />}
        {currentPage === "table2" && (
        <Table2 students={students} setStudent={setStudent} />
  )}
    </main>
    </>
  )
}

function Number(){
  const numbers = [1,2,3,4,5,6,7,8,9];
  const h1numbers = numbers.map(n=> <h1>{n}</h1>);

  return <>
    {numbers}
    {h1numbers}
    {numbers.map(n=> <h1>{n}</h1>)}
  </>
}

function Table(){
  const students = [
    {no:1,name:"AAA",age:33},
    {no:2,name:"BBB",age:34},
    {no:3,name:"CCC",age:35},
    {no:4,name:"DDD",age:36},
    {no:5,name:"EEE",age:37},
    {no:6,name:"FFF",age:38},
  ];
  
  return (
  <table>
    <thead>
      <tr>
        <th>이름</th>
        <th>나이</th>
        <th>번호</th>
      </tr>
    </thead>
    <tbody>
      {
        students.map( (n) => 
        <tr>
          <td>{n.no}</td>
          <td>{n.name}</td>
          <td>{n.age}</td>
        </tr>
      )
    }
    </tbody>
  </table>
  )
}

function Table2({students, setStudent}){


  const [value, setValue] = useState({
    no:"",
    name:"",
    age:"",
  })
  
  const handleOnChange = (e) => {
    console.log(e.target.name + ": " + e.target.value);
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  const handleOnClick = (e) => {
    setStudent([
      ...students,
      {
        no:value.no,
        name:value.name,
        age:value.age,   
      },
    ])
    console.log(students);
  }

  const handleDeleteOnClick =(e) =>{
    console.log("삭제한다");
  }
  
  return (
  <>
    <div>
      <input type="text" name="no" placeholder='번호' onChange={handleOnChange}/>
      <input type="text" name="name" placeholder='이름' onChange={handleOnChange}/>
      <input type="text" name="age" placeholder='나이' onChange={handleOnChange}/>
      <button onClick={handleOnClick}>추가</button>
    </div>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>나이</th>
        </tr>
      </thead>
      <tbody>
        {
          students.map( (n, idx) => 
          <tr key={n.no}>
            <td>{n.no}</td>
            <td>{n.name}</td>
            <td>{n.age}</td>
            <td><button onClick={handleDeleteOnClick}>삭제</button></td>
          </tr>
        )
      }
      </tbody>
    </table>
  </>
 
  )
}

export default App
