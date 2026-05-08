import { useParams } from "react-router-dom";
import * as s from "./styles";
import { MdPanoramaFishEye } from "react-icons/md";
import { GiCardRandom } from "react-icons/gi";
import GameCard from "../../components/GameCard/GameCard";

function Game(){
    const params = useParams();

    console.log(params);

    return <>
        <div css={s.layout}>
            <header>
                <h1><GiCardRandom />CARD MATCHING Game<GiCardRandom/></h1>
                <h3>Player: {params.username}</h3>
            </header>
            <main>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
                <GameCard></GameCard>
            </main>
        </div>
    </>
}

export default Game;