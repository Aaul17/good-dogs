import React, { Component } from 'react';

export default class LikeDogButton extends Component {

  render(){
    return(
      <div>
        <button onClick={this.props.likeDog}>Like this doggo!</button>
      </div>
    )
  }
}
