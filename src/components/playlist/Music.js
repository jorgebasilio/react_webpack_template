import React, { Component } from 'react';

class Music extends Component {

  _onClick() {
    this.props.deleteVideo(this.props.index)
  }

  render() {
    return(
      <div className='music-item' >
        <h4>{this.props.title}</h4>
        <button className='play-button-playlist'>Play</button>
        <a className='delete-button-playlist'
                onClick={this._onClick.bind(this)}>X</a>
      </div>
    );
  }
}

export default Music;
