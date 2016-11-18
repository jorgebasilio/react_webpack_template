import React, { Component } from 'react';
// Components
import SongFinder from './SongFinder';
import PlayList from './playlist/PlayList'

class App extends Component {
  constructor() {
    super();
    this.state = {
      addVideo: {}
    }
  }

  addVideo(id, snippet) {
    this.setState({addVideo: {id, snippet}});
  }

  render() {
    return(
      <div>
        <SongFinder addVideo={this.addVideo.bind(this)} />
        <PlayList video={this.state.addVideo} />
      </div>
    );
  }
}

export default App;
