import React, { Component } from 'react';
// Components
import Music from './Music';

class PlayList extends Component {
  render() {
    return(
      <div className='player-section'>
        <Music />
        <Music />
        <Music />
      </div>
    );
  }
}

export default PlayList;
