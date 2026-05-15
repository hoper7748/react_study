import { Link, useLocation, useNavigate } from "react-router";
import * as s from "./styles"
import { LuPencil } from "react-icons/lu";
import Button from "../Button/Button";
import { BiPlus } from "react-icons/bi";
import { useState } from "react";

function Header() {
    const {pathname} = useLocation();
    const navigate = useNavigate();
    const [ show, setShow] = useState(false);

    const handleWriteOnClick= () => {
        navigate("/write");
    }

    const handlePrifileOnClick = () => {
        setShow(prev => !prev)
    }

    const handleProfile = () =>{
        // console.log("Hello1");
        navigate("/PostList");
    }

    // 토큰을 반환하여 로그아웃 기능을 수행함.
    const handleLogoutOnClick = () =>{
        localStorage.removeItem("accessToken");
        navigate("/auth/sign", {
            replace: true,
        });
    }

    return (
        <header css={s.layout}>
            <div css={s.left}>
                <Link to ={"/"}>
                    <h1><LuPencil /> PostLab</h1>
                </Link>
            </div>
            <div css={s.right}>
                {
                    !pathname.startsWith("/write") &&   
                    <Button onClick={handleWriteOnClick}><BiPlus />글쓰기</Button>
                }
                <div css={s.profile} onClick={handlePrifileOnClick}>
                    <span>AAA</span>
                    <ul css={s.profileMenu(show)}>
                        <li onClick={handleProfile}>프로필 설정</li>    
                        <li onClick={handleLogoutOnClick}>로그아웃</li>    
                    </ul>    
                </div>
            </div>
        </ header>
    )
}

export default Header;