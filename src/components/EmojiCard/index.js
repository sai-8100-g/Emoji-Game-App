import './index.css'

const EmojiGameItems = props => {
  const {emojisItem, selectingEmojis} = props
  const {emojiName, emojiUrl, id} = emojisItem

  const selectedEmoji = () => {
    selectingEmojis(id)
  }
  return (
    <li>
      <button type="button" onClick={selectedEmoji}>
        <img src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiGameItems
