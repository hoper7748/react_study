import { useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const onChangeData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = () => {
    setUserData([...userData, data]);

    setData({
      username: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div className="wrap">
      <div className="login-box">
        <div className="logo">
          <h1>회원가입</h1>
          <p>간편하게 가입하고 서비스를 이용해보세요</p>
        </div>

        <div className="form-group">
          <label>이름</label>
          <input
            type="text"
            name="username"
            value={data.username}
            onChange={onChangeData}
            placeholder="이름 입력"
          />
        </div>

        <div className="form-group">
          <label>이메일</label>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={onChangeData}
            placeholder="example@email.com"
          />
        </div>

        <div className="form-group">
          <label>비밀번호</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={onChangeData}
            placeholder="비밀번호 입력"
          />
        </div>

        <div className="form-group">
          <label>전화번호</label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={onChangeData}
            placeholder="010-0000-0000"
          />
        </div>

        <button className="signup-btn" onClick={onClickButton}>
          회원가입
        </button>
      </div>

      <div className="table-box">
        <h2>가입 회원 목록</h2>

        <table>
          <thead>
            <tr>
              <th>이름</th>
              <th>이메일</th>
              <th>비밀번호</th>
              <th>전화번호</th>
            </tr>
          </thead>

          <tbody>
            {userData.map((n, index) => (
              <tr key={index}>
                <td>{n.username}</td>
                <td>{n.email}</td>
                <td>{n.password}</td>
                <td>{n.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;