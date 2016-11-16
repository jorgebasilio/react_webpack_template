import React, { Component } from 'react';
// Components
import SongFinder from './SongFinder';
import PlayList from './playlist/PlayList'

class App extends Component {
  render() {
    return(
      <div>
        <SongFinder />
        <PlayList />
      </div>
    );
  }
}

export default App;
