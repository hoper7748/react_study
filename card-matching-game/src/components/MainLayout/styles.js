import { css } from "@emotion/react";

export const layout =css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const container = css`
    box-sizing: border-box;
    border-radius: 8px;
    padding:20px;
    width: 1200px;
    height: 700px;
    background-color: #111111;
    box-shadow: 0 0 10px #000000aa;
`;


export const containerBorder = css`
    box-sizing: border-box;
    border:2px solid #00000044;
    border-radius: 8px;
    width: 100%;
    height: 100%;
`;