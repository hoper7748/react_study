import { css } from "@emotion/react";

export  const layout = css`
    display:flex;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & > header{
        display:flex;
        flex-direction: column;
        box-sizing:border-box;
        padding:30px;
        width: 100%;
        /* height: 100%; */
        
        & > h1{
            font-size: 50px;
            align-items: center;
            gap: 5px;
            margin: 0 0 10px;
            font-size:30px;
            /* 폰트 색상을 전부 투명으로 바꿈 */
            color:transparent;
            -webkit-text-fill-color: transparent;
            
            background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);

            /* Text영역만 색상이 들어감 */
            -webkit-background-clip: text;
            background-clip: text;

            cursor:default;

            & svg:nth-of-type(1) {
                color: rgba(115, 10, 36, 1);
            }
            & svg:nth-last-of-type(1) {
                color: rgba(131, 166, 109, 1);
            }
        }
        &>h3{
            margin:0;
            color:#c5c5c5;
            cursor: default;
        }
    }
    
    & > main{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap:15px;
        box-sizing:border-box;
        margin-bottom:20px;
        padding:20px;
        width: 100%;
        height: 100%;
        /* background-color: rgba(255, 255, 255, 0.25); */

    }
`;

export const centerCountainer = css`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-grow: 1;

    & > h1 {
        margin: 0 0;
        font-size: 70px;
        color: #fafafa;
    }

    @keyframes startButton {
        0%{
            transform: scale(100%);
        }   
        100%{   
            transform: scale(110%);
        }
    }

    & button{
        border:none;
        font-size: 50px;
        font-family: 600;
        color:transparent;
        -webkit-text-fill-color: transparent;
        background: linear-gradient(90deg,rgba(115, 10, 36, 1) 0%, rgba(131, 166, 109, 1) 100%);
        background-clip:text;
        -webkit-backdrop-clip  : text;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-shadow:  0 0 10px #ffffff55;
        animation-name: startButton;
        animation-duration: 1s;
        animation-timing-function: esae-in-out;
        animation-iteration-count: infinite;
        animation-direction: alternate;

        &:hover{
            /* transform: scale(105%); */
            animation-iteration-count: 0;
            transform:scale(110%);
        }
    }
`;  