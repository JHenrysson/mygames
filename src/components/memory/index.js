import React, {useState} from "react";
import "./index.css"
import StatusBar from "./StatusBar";
import MemoryCard from "./MemoryCard";

// array of colors
const colors = [
    "pink",
    "red",
    "orange",
    "yellow",
    "green",
    "teal",
    "blue",
    "purple",
];

function generateCards() {
    const cards = [];
    for (let i = 0; i < colors.length; i++) {
        // this card will have the even ones
        cards.push({
            key: i * 2,
            color: colors[i],
            isFlipped: false,
        });
        // this card will have the odd card
        cards.push({
            key: i * 2 + 1,
            color: colors[i],
            isFlipped: false,
        });
    }
    return cards.sort(() => Math.random()-0.5);
}

//this will return whatever code is in the markup
// creating a state change from react component


function Memory() {
    const [cards, setCards] = useState(generateCards());

    function onCardClicked(clickedCard) {
        setCards((oldCards) => {
           return oldCards.map((card) => {
             if (card.key === clickedCard.key){
                 return {...card, isFlipped: !card.isFlipped};
             }
                 return card;
           });
        });
    }
    function onRestart(){
        setCards(generateCards());
    }
     return (
        <div className="game-container">
            <StatusBar status="Time:0" onRestart={onRestart}> </StatusBar>
            <div className="memory-grid">
                {cards.map((card) => (
                    <MemoryCard
                        key={card.key}
                        color={card.color}
                        isFlipped={card.isFlipped}
                        onClick={() => onCardClicked(card)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Memory;