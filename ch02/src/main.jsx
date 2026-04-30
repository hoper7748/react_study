import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


/**
 * JSX 문법 규칙 
 * 1. JSX는 꼭 하나의 묶음이여야 한다.
 * 2. 열었으면, 닫아야한다.
 * 3. 변수 또는 특정 값을 표현할 때 {} 중괄호 안에 작성한다.

 */

/**
 * 컴포넌트란?
 * 1. JSX를 리턴하는 함수
 * 2. 모듈화(부품)
 * 3. 매개변수는 properties (props) 라는 객체 하나만 허용한다.
 * g
 */

function PBox(){

  return <div>
    <CBox a="Hello" b="world"></CBox>
  </div>
}

function CBox(props){
  console.log(props);
  const {a, b} = props;
  return <>
    <h1>{a} </h1>
    <h2>{b} </h2>
  </>
}

createRoot(document.getElementById('root')).render(<PBox />)
