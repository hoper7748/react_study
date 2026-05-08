import { css } from "@emotion/react";
import * as s from "./styles";
import{GiCardRandom} from "react-icons/gi";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


function Home(){
    const navigate = useNavigate();
    const [ inputValue, setInputValue] = useState("");

    const handleInputOnChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleStartOnClick = ( ) => {
        if(!inputValue){
            setInputValue("");
            Swal.fire({
                title: "게임 시작 실패",
                text: "이름을 입력해 주세요.",
                icon: "warning"
                });
            return;
        }
        navigate(`/game/${inputValue}`);
    }

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCHING Game<GiCardRandom/></h1>
            </header>
            <main>
                <div css={s.usernameInput}>
                    <input type="text" placeholder="Player Name" onChange={handleInputOnChange}/>
                </div>
                
                <div css={s.startButton}>
                    <button onClick={handleStartOnClick}>
                        Start
                    </button>

                </div>
            </main>
        </div>
    </>
}

export default Home;