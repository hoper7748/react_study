import { css } from "@emotion/react";

export const topPosting = css`
    width: 100%;
    height: 200px;
    background-color: #11112a;

`;

export const searchContainer = css`
    display:flex;
    justify-content: flex-end;
    align-items: stretch;
    gap: 5px;
    box-sizing:border-box;
    padding: 10px 20px;

    // 띄어쓰기 하면 하위 선언자를 의미
    & input{
        margin: 0px !important;
    }
`;

export const postListContainer = css`
    display:flex;
    flex-wrap:wrap;
    gap:20px;
    list-style-type: none;
    margin: 0;
    box-sizing:border-box;
    border: 1px solid #dbdbdb;
    border-width: 1px 0px ;
    padding: 20px;
    width:100%;
    height: 300px;
    background-color: #f3f2ec;
`;   

export const card = css`
    transition: all 0.2s ease-in-out;
    flex-grow: 1;
    box-sizing: border-box;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    height: 120px;
    background-color: white;
    cursor: pointer;

    &:hover{
        box-shadow: 0 0 10px 5px #00000033;
    }

    &:active{
        transform:scale(96%);
    }
`;

export const pagination = css`
    display:flex;
    justify-content:center;
    align-items:stretch;
    gap: 5px;
    box-sizing:border-box;
    padding:20px;
`