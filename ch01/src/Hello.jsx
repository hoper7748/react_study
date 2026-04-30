import { useState } from "react";




function Hello()    {
    const text = "헬로";
    let i;
    const [count, setCount] = useState(0);
    const [name, setname] = useState("");
    // const [txt, setText] = useState(text);
    const CallText = () => {
        switch (count){
            case 0:
                setname("나에게");
                break;
            case 1:
                setname("축구는");
                break;
            case 2:
                setname("『살인』");
                break;
            case 3:
                setname("이다.");
                break;
        }
        setCount(count + 1);

        if(count >= 3){
            setCount(0);
        }
        // setname(text);
    }
    return (
        <div>
            <button onClick={CallText}>Click</button>
            <h1>{name}</h1>
        </div>
    )
}

export function Hi(){

    const [score, setscore] = useState(0);

    const addScore =() => {
        setscore(score + 1);
    };

    const subScore = () => {
        setscore(score - 1);
    };

    return (
        <div>
            <button onClick={() => {
        setscore(score + 1);
    }}>
        1증가</button>
            <button onClick={() => {
        setscore(score - 1);
    }}>
        1감소</button>
            <h1>{score}</h1>
        </div>
    )
}

export function Bye(){
    return (
        <div>잘가</div>
    )
}


export default Hello