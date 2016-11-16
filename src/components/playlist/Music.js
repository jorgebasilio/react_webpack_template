import React, { Component } from 'react';

class Music extends Component {
  render() {
    return(
      <div className='music-item' >
        <h4>Prueba</h4>
        <button className='play-button-playlist'>Play</button>
        <button className='delete-button-playlist'>X</button>
      </div>
    );
  }
}

export default Music;
