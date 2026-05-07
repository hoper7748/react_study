import { useEffect, useRef, useState} from 'react'
import Modal from 'react-modal';

// AppElement는 최상위 루트를 잡는 행위이다.
Modal.setAppElement("#root");

function EditModal({isOpen, onClose, users, setUsers, editUserId}){
  console.log(users);

  const[ inputValues, setInputValues ] = useState(users.find(user => user.id === editUserId));
  const [ isValid, setValid ] = useState(false);
  const REGEX ={
    username: /^[a-z]+[a-z0-9_-]{4,19}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  }
 
  useEffect(() => {
    const entries = Object.entries(inputValues);
    const validList = entries.filter(([key, value]) => {
      const regex = REGEX[key];
      if(!regex) return true;
      return regex.test(value);
    }) 

    setValid(validList.length === entries.length);
  }, [inputValues]);

  const handleInputOnChange = (e) => {
    const {name, value} = e.target;
    
    // setValid(REGEX.)
   
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleOkOnClick = () => {
    setUsers(users.map(user =>{
      if(user.id === editUserId){
        return inputValues;
      }
      return user;
    }))
    onClose();
  }

  return   (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={{
      overlay:{
        display:"flex",
        justifyContent: "center",
        alignItems:"center",
        backgroundColor:"#000000aa"
      },
      content: {
        position:"static",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        width:"300px",
        height:"200px",

      }
    }}>
      <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명' />
      <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일' />
      <div>
        <button disabled={!isValid} onClick={handleOkOnClick}>확인</button>
        <button onClick={onClose}>취소</button>
      </div>
    </Modal>)
}

function App() {
  const initUser = {
    id:"",
    username:"",
    email:"",
  }

  const[ inputValues, setInputValues ] = useState(initUser);
  const [users, setUsers] = useState([]);
  const currentId  = useRef(0);

  const [ isValid, setValid ] = useState(false);
  const [ modalOpen, setModalOpen ] = useState(false);
  const [ editModal, setEditModal ] = useState(<></>);

  const REGEX ={
    username: /^[a-z]+[a-z0-9_-]{4,19}$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  }

  useEffect(() => {
    const entries = Object.entries(inputValues);
    const validList = entries.filter(([key, value]) => {
      const regex = REGEX[key];
      if(!regex) return true;
      return regex.test(value);
    }) 

    setValid(validList.length === entries.length);
  }, [inputValues]);

  const handleInputOnChange = (e) => {
    const {name, value} = e.target;
    
    // setValid(REGEX.)
   
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  }

  const handleRegisterOnClick = () => {
    console.log("Hello");
    currentId.current += 1;
    const newUser = {
      ...inputValues,
      id: currentId.current,
    }
    setUsers([...users, newUser]);
    console.log(users);

    setInputValues(initUser);
  }

  const thAndTdStyle = (width = '70px') => ({
    padding: '0px 10px',
    width ,
    boxSizing: 'border-box', 
    border:'1px solide #dbdbdb',
    textAline: 'center'
  });

  const handleEditOnClick = (e) => {
    setEditModal(<EditModal isOpen={true} onClose={handleModalOnClose} users={users} setUsers={setUsers} editUserId={parseInt(e.target.value)}/> )
    setModalOpen(true);
  }

  const handleModalOnClose = () =>{
    setEditModal(<></>);
    setModalOpen(false);
  }

  const handleDeleteOnClick = (e) => {
    const userId = parseInt(e.target.value);

    console.log(userId);
    console.log(users[0].id);
    
    setUsers(users.filter(user => user.id !== userId));
    console.log(users);
  }

  return (
    <div>
      <div>
        <input type="text" name='username' value={inputValues.username} onChange={handleInputOnChange} placeholder='계정명' />
        <input type="text" name='email' value={inputValues.email} onChange={handleInputOnChange} placeholder='이메일' />
        <button disabled={!isValid} onClick={handleRegisterOnClick}>등록</button>
      </div>
      <table style ={{
        boxSizing: 'border-box', 
        border:'1px solide #dbdbdb',
        borderCollapse:'collapse',
  }}>
        <thead>
          <tr>
            <th style={thAndTdStyle()}>ID</th>
            <th style={thAndTdStyle('120px')}>UserName</th>
            <th style={thAndTdStyle('200px')}>EMAIL</th>
            <th style={thAndTdStyle()}></th>
            <th style={thAndTdStyle()}></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((n) =>(
              <tr key={users.id}>
                <td style={thAndTdStyle()}>{n.id}</td>
                <td style={thAndTdStyle('120px')}>{n.username}</td>
                <td style={thAndTdStyle('200px')}>{n.email}</td>
                <td style={thAndTdStyle()}>{<button value={n.id} onClick={handleEditOnClick}>수정</button>}</td>
                <td style={thAndTdStyle()}>{<button value={n.id} onClick={handleDeleteOnClick}>삭제</button>}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {modalOpen && editModal}
    </div>
  )
}

export default App
