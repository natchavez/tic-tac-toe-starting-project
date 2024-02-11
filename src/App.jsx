import Player from './components/Player';
import GameBoard from './components/GameBoard';
import { useState } from 'react';

function App() {
  const [activePlayer, setActivePlayer] = useState('X');
  function handleSelectSquare() {
    setActivePlayer((currentActivePlayer) =>
      currentActivePlayer === 'X' ? 'O' : 'X'
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            intialName="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
          />
          <Player
            intialName="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
          />
        </ol>
        <GameBoard
          onSelectSquare={handleSelectSquare}
          activePlayerSymbol={activePlayer}
        />
      </div>
    </main>
  );
}

export default App;
