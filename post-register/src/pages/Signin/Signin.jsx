import { Link, useNavigate } from "react-router";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import TextInput from "../../components/TextInput/TextInput";
import * as s from "./styles";
import { useState } from "react";

function Signin() {
    const navigate = useNavigate();


    // 현재 field에 입력된 데이터를 state로 관리
    const [ inputValues, setIntValues ] = useState({
        email: "test1234@gmail.com",
        password: "1q2w3e4r!",

    });

    // 로그인 체크
    const requestSignin = async (email, password) => {
        const users = JSON.parse(localStorage.getItem("users"));

        const foundUser = users.find(user => user.email === email && user.password === password);
        
        if(!foundUser){
            throw  {
                status: 401,
                data: "로그인 실패",
            };
        }
        // 로그인이 완료되면 토큰을 받아오는 행위.
        return {
            status: 200,
            data: {
                accessToken: JSON.stringify({secret: "abcd1234", userId: foundUser.id}),
            }    // 나중에 JWT로 대체 할 예정.
        }
    }

    // field의 데이터가 변경될 때마다 호출되는 OnChange Method
    const handleInputOnChange = (e) => {
        setInputValues( (prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        });
    }

    // 버튼 클릭 시 실행되는, 토큰 발사대
    const handleSigninOnClick = async () => {
        try{
            const response = await requestSignin(inputValues.email, inputValues.password);
            localStorage.setItem("accessToken", response.data.accessToken);
            navigate("/", {
                replace: true,
            });
        } catch (error){
            alert(error.data);
        }
        // localStorage.setItem("loginUser",JSON.stringify(tempUser));
        // const userJson = localStorage.getItem("loginUser");
        // const user = JSON.parse(userJson);
        // console.log(user);
    }

    return (
        <div>
            <Link to={"/auth/signup"}>회원가입</Link>
            <TextInput title={"이메일"} name={"email"} value={inputValues.email} onChange={handleInputOnChange}></TextInput>
            <PasswordInput title={"비밀번호"} name={"password"} value={inputValues.password} onChange={handleInputOnChange}></PasswordInput>
            <button onClick={handleSigninOnClick} >로그인</button>
        </div>
    )
}

export default Signin