import {Component} from 'react'

import EmojiGameItems from '../EmojiCard'

import WinOrLooseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      emojisList: props.emojisList,
      emojiIdList: [],
      gameStatus: 'IN PROGRESS',
      score: 0,
      totalScore: 0,
    }
  }

  selectingEmojis = id => {
    const {emojiIdList, gameStatus, emojisList, score} = this.state
    if (gameStatus === 'IN PROGRESS') {
      if (emojiIdList.includes(id)) {
        this.setState({gameStatus: 'LOST'})
      } else {
        const newScore = score + 1
        if (newScore === emojisList.length) {
          this.setState({
            gameStatus: 'WON',
            score: newScore,
          })
        } else {
          const newEmojisList = emojisList.sort(() => Math.random() - 0.5)
          this.setState(prevState => ({
            score: prevState.score + 1,
            emojiIdList: [...prevState.emojiIdList, id],
            emojisList: newEmojisList,
          }))
        }
      }
    }
  }

  restartingTheEmojisGame = (score, totalScore) => {
    this.setState({
      emojiIdList: [],
      score: 0,
      totalScore: Math.max(totalScore, score),
      gameStatus: 'IN PROGRESS',
    })
  }

  render() {
    const {emojisList, score, totalScore, gameStatus} = this.state
    const isGameOver = gameStatus !== 'IN PROGRESS'
    return (
      <div className="main-container">
        <nav>
          <div className="logo-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
              alt="emoji logo"
            />
            <h1>Emoji Game</h1>
          </div>
          {isGameOver === false && (
            <div className="score-para">
              <p>Score: {score}</p> <p>Top Score: {totalScore}</p>
            </div>
          )}
        </nav>
        <section>
          {isGameOver ? (
            <WinOrLooseCard
              score={score}
              totalScore={totalScore}
              gameStatus={gameStatus}
              restartingTheEmojisGame={this.restartingTheEmojisGame}
            />
          ) : (
            <ul>
              {emojisList.map(eachObj => (
                <EmojiGameItems
                  emojisItem={eachObj}
                  key={eachObj.id}
                  selectingEmojis={this.selectingEmojis}
                />
              ))}
            </ul>
          )}
        </section>
      </div>
    )
  }
}

export default EmojiGame
