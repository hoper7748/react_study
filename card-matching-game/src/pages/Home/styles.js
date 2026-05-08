import { css } from "@emotion/react";

export  const layout = css`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;


    & > header{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 200px;
        
        & > h1{
            font-size: 50px;
            align-items: center;
            gap: 5px;
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
    }
    
    & > main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        box-sizing:border-box;
        border-radius: 8px ;
        padding: 20px;
        width: 600px;
        height: 250px;            
    }
`


export const usernameInput = css`
    &>input{
        box-sizing: border-box;
        border: none;
        border-radius: 40px;
        
        outline: none;
        width:340px;
        height:40px;
        padding: 0 10px;
        text-align:center;  
        font-size: 24px;
        color: #c3c3c3;
        background-color: #272727;
        box-shadow: 0 0 10px #c5c5c555 inset;
        cursor: pointer;

        &:hover, &:focus{
            box-shadow: 0 0 10px #9c9c9c55 inset;
        }

        &::placeholder {
            color: #c3c3c3;
        }
    }
    
`
export const startButton = css`
    &>button{
        border:none;
        width:340px;
        height:30px;
        font-size: 40px;
        font-weight: 600px;
        text-shadow: 0 0 5px #fafafa;
        color: #c5c5c5;
        background-color:transparent;
        &:hover {
            color: #fbff00;
        }
        &:active {
            text-shadow: 0 0 10px #a52954b7;
        }
    }


`