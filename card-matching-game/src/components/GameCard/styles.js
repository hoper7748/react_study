import { css } from "@emotion/react";

export const scene = css`
    width: 160px;
    height: 220px;
    perspective: 800px;
    cursor: pointer;

/*     
    &:hover > div{
        transform: rotateY(180deg);
    } */
`;

export const layout =(isOpen)=> css`
    position: relative; // 하위 객체들이 겹칠 수 있게 relative로 해줌
    border-radius: 8px;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;   // transform style을 3D로 표현해주기 위해
    transition: all 0.3s ease-in-out;   
    box-shadow: 0 0 10px #ffffff88;
    transform: ${isOpen ? "rotateY(180deg)" : "rotateY(0deg)"};

    /* overflow: hidden; */
`;


export const front= css`
    position: absolute;
    display:flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: white; 
    backface-visibility: hidden;
    transform: rotateY(180deg);
`;

export const back = css`
    position:absolute;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px;
    width: 100%;
    height:100%;
    background-color: #e9e3dd;
    backface-visibility: hidden;
`;

export const container = css`
    border-radius: 8px;
    width: 100%;
    height: 100%;
    background-color: #751f00;
`;