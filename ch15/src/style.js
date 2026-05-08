import {css} from "@emotion/react";

export const card = css`
    box-sizing: border-box;
    border-radius: 4px;
    padding:10px;
    width:340px;
    box-shadow: 0 0 5px #00000044;
`;

export const inputBox = css`
    margin-bottom: 10px;

    & > input {
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid #bdbdbd;
        border-radius: 4px;
        width: 100%;
        height: 40px;
        outline:none;
        cursor: pointer;
        &:hover{
            box-shadow: 0 0 3px #00000033;
        }   
        &:active{
            box-shadow: 0 0 3px #00000033;
        }
        &:focus{
            box-shadow: 0 0 3px;
        }
    }
`

export const buttonBox = css`
    & > button {
        box-sizing: border-box;
        border:jnone;
        border-radius: 4px;
        width: 100%;
        height: 30px;
        background-color: #0088ff;
        color: #fafafa;
        cursor: pointer;

        &:hover{
            background-color:#0076dd;
        }

        &:active{
            background-color: #005fb3;
        }
        &:disabled{
            background-color: #c5c5c5;
            cursor: default;
        }
    }
`