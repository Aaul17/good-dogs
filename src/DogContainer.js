import React, { Component } from 'react';
import LikeDogButton from './LikeDogButton.js'

export default class DogContainer extends Component {
  constructor(){
    super()
    this.state = {
      goodBoiCount: 0
    }
  }

  handleClick = () => {
    this.setState({
      goodBoiCount: this.state.goodBoiCount + 1
    })
  }


  render(){
    return(
      <div>
        <p>{this.state.goodBoiCount} Likes</p>
        < LikeDogButton likeDog={this.handleClick} />
      </div>
    )
  }
}
