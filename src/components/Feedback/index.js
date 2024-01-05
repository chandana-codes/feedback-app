// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isSelected: false}

  onClickEmoji = () => {
    this.setState({isSelected: true})
  }

  renderFeedQuestion = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedBackCard">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <div className="customerSatisfactionContainer">
          <ul className="emojiContainer">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickEmoji}
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji"
                  />
                  <br />
                  <span className="emojiName">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thankYouContainer">
        <img src={loveEmojiUrl} alt="love emoji" className="thankyouEmoji" />
        <h1 className="heading">Thank You!</h1>
        <p className="description">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isSelected} = this.state

    return (
      <div className="container">
        <div className="feedBackCard">
          {isSelected ? this.renderThankYou() : this.renderFeedQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
