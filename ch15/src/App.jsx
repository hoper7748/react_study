import { css } from '@emotion/react'
import { useState } from 'react'
import * as s from './style'

function App() {
  // 박스부터 만들자

  // const card =css`
    /* box-sizing: border-box;
    padding: 10px;
    width: 350px;
    box-shadow: 0 0 5px #00000044;
    border-radius: 4px;
  `

  const inputBox = css`
    margin-bottom: 10px;
    & > input {
      width: 100%;
      height: 40px;
      padding: 10px;
      box-sizing: border-box;
      outline: none; 
    }
    & > button{
      width: 100%;
      height: 30px;
      background-color: red;
    }

    & > button:hover{
      background-color: green;
    }

    & > button:active{
      background-color: blue;
    }
  ` */

  return (
    < >
      <div css={s.card}>
        <div css={s.inputBox}>
          <input type="text"  placeholder='사용자 이름' />
        </div>
        <div css={s.inputBox}>
          <input type="password" placeholder='비밀번호'/>
        </div>
        <div css={s.buttonBox}>
          <button disabled>사용자 등록 정보</button>  
        </div>
      </div>
    </>
    // <div css={s.container}>
    // <div css={s.box1}>
    //   <div css={s.box2}>
    //     <input type="text"  css={s.inputBox1} placeholder='사용자 이름' />
    //   </div>
    //   <div css={s.box2}>
    //     <input type="password" css={s.inputBox1} placeholder='비밀번호'/>
    //   </div>
    //   <div css={s.box2}>
    //     <button css={s.buttonBox}>사용자 등록 정보</button>  
    //   </div>
    // </div>
    // </div>
  )
}

export default App
