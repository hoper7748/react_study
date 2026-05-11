import { css } from "@emotion/react";
import * as s from "./styles"

function GameCard({card, onClick}){
    return <div css ={s.scene} onClick={onClick }>
        <div css={s.layout(card.isOpen)}>
            <div css={s.front}>
                {card.content}
            </div>

            <div css={s.back}>
                <div css={s.container}>
                </div>
            </div>
        </div>
    </div>
}

export default GameCard;