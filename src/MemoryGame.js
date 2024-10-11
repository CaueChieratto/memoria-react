import React, { useEffect, useState } from "react";
import GameOver from "./components/GameOver";
import game from "./game/game";
import GameBoard from "./components/GameBoard";

export default function MemoryGame() {
  const [gameOver, setGameOver] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(game.createCardsFromTechs());
  }, []);

  function restart() {
    game.clearCards();
    setCards(game.createCardsFromTechs());
    setGameOver(false);
  }

  function handleFlip(card) {
    game.flipCard(
      card.id,
      () => {
        setGameOver(true);
      },
      () => {
        setCards([...game.cards]);
      }
    );
    setCards([...game.cards]);
  }

  return (
    <div>
      <GameBoard handleFlip={handleFlip} cards={cards}></GameBoard>
      <GameOver show={gameOver} handleRestart={restart}></GameOver>
    </div>
  );
}
