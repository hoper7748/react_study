import { useParams } from "react-router-dom";
import * as s from "./styles";
import { MdPanoramaFishEye } from "react-icons/md";
import { GiCardRandom } from "react-icons/gi";
import GameCard from "../../components/GameCard/GameCard";
import { useEffect, useRef, useState } from "react";
import { BsCardList } from "react-icons/bs";

function Game(){
    const params = useParams();
    const [ cards, setCards] = useState([]); 
    const [started, setStarted] = useState(false);
    const [timer, setTimer] = useState(0);

    const timeInterval = useRef(null);

    const msStr = Math.floor(timer/100).toString();
    const sec = msStr.substring(0, msStr.length-1) || 0;
    const ms = msStr.substring(msStr.length-1);
    const handleStartOnClick = () => {
        setStarted(true);
        setTimer(0);
    }

    


    const handleCardOpenOnClick = (id) => {
        if(cards.filter(card => card.isOpen && !card.isAnswer).length > 1){
            return;
        }
        setCards(cards.map(card => {
            if(card.id === id){
                return {
                    ...card,
                    isOpen: true,
                }
            }
            return card;
        }));
        
    }

    useEffect(() => {
        const openCards = cards.filter(card => card.isOpen && !card.isAnswer);
        const answerCards = cards.filter(card => card.isAnswer);
        if(answerCards.length ===12){
            setStarted(false);
        }

        if (openCards.length === 2) {
            if (openCards[0].content === openCards[1].content) {
                setCards(cards.map(card => {
                    if (card.id === openCards[0].id || card.id === openCards[1].id) {
                        return {
                            ...card,
                            isAnswer: true,
                        }
                    }
                    return card;
                }));
            } else {
                setTimeout(() => {
                    setCards(cards.map(card => {
                        if (!card.isAnswer) {
                            return {
                                ...card,
                                isOpen: false,
                            }
                        }
                        return card;
                    }));
                }, 500);
            }
        }
        console.log("!!")
    }, [cards]);

    // console.log(Math.floor(Math.random) * 10 + 1);

    useEffect(() => {
        if(started){
            let randomNums = [] ;
            let count = 0 ;
            while(randomNums.length < 12){
                const newNum = Math.floor((Math.random()* 100) + 1);
                if(randomNums.includes(newNum)){
                    continue;
                }
                randomNums = [...randomNums, newNum, newNum];
            }
            
            console.log(randomNums);
            for(let i = 0 ; i < randomNums.length; i++){
                const j = Math.floor(Math.random() * 10);
                console.log(Math.random() + " / " + (i + 1) + " = " + j);
                [randomNums[i], randomNums[j]] = [randomNums[j], randomNums[i]];
            }

            setCards(randomNums.map((num, index) => ({
                id: index + 1,
                content: num,
                isOpen: false,
                isAnswer:false,
            })));

            setTimer(0);
        }
    }, [started]);
    

    useEffect(( ) => {
        if(started && !timer){
            const now = new Date();
            const nowTimer = now.getTime();
            timeInterval.current = setInterval (() => {
                setTimer(new Date().getTime() - nowTimer);
            }, 10)
        }
        else if(!started && !!timer){
            // console.log("AA");
            clearInterval(timeInterval.current );
        }
    }, [started])

// useEffect(() => {
//     if (!started) return;

//     const startTime = Date.now();

//     const interval = setInterval(() => {
//         setTimer(Date.now() - startTime);
//     }, 10);

//     return () => clearInterval(interval);
// }, [started]);

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCHING Game<GiCardRandom/></h1>
                <h3>Player: {params.username} timer: {sec}.{ms}</h3>
            </header>
            <main>
                {
                    started 
                    ? cards.map(card=> <GameCard key={card.id} card={card} onClick={ () => handleCardOpenOnClick(card.id)}/>)
                    :
                    <div css={s.centerCountainer}>
                        {
                            !started && !!timer && <h1>Time: {sec}.{ms}</h1>
                        }
                        {
                            !started && !timer 
                            ? <button onClick={handleStartOnClick}>시작</button> 
                            : <button onClick={handleStartOnClick}>다시하기</button>
                        }
                    </div>
                    
                }

            </main>
        </div>
    </>
}

export default Game;