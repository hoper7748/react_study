import{useState} from 'react';
import EditModal from './EditModal';


function UserListTable({users, setUsers}) {

    
    const [ modalOpen, setModalOpen ] = useState(false);
    const [ editModal, setEditModal ] = useState(<></>);


  const handleEditOnClick = (e) => {
    setEditModal(<EditModal isOpen={true} onClose={handleModalOnClose} users={users} setUsers={setUsers} editUserId={parseInt(e.target.value)}/> )
    setModalOpen(true);
  }
  const handleDeleteOnClick = (e) => {
    const userId = parseInt(e.target.value);

    console.log(userId);
    console.log(users[0].id);
    
    setUsers(users.filter(user => user.id !== userId));
    console.log(users);
  }
  const thAndTdStyle = (width = '70px') => ({
    padding: '0px 10px',
    width ,
    boxSizing: 'border-box', 
    border:'1px solide #dbdbdb',
    textAline: 'center'
  });

  const handleModalOnClose = () =>{
    setEditModal(<></>);
    setModalOpen(false);
  }
return <>
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
</>
}

export default UserListTable;