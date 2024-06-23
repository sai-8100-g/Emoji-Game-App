import './index.css'

const WinOrLooseCard = props => {
  const {gameStatus, score, restartingTheEmojisGame, totalScore} = props
  const restartTheGame = () => {
    restartingTheEmojisGame(score, totalScore)
  }

  const isLose = gameStatus === 'LOST'
  const isWin = gameStatus === 'WON'
  return (
    <div className="win-or-lose-container">
      <div className="info-card">
        {isLose && <h1>You Lose</h1>}
        {isWin && <h1>You Won</h1>}
        {isLose && <p>Score</p>}
        {isWin && <p>Best Score</p>}
        <p style={{color: '#6a59ff'}}>{score}/12</p>
        <button type="button" onClick={restartTheGame}>
          Play Again
        </button>
      </div>
      {isLose && (
        <img
          src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
          alt="win or lose"
        />
      )}
      {isWin && (
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
        />
      )}
    </div>
  )
}

export default WinOrLooseCard
