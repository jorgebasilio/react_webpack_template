import React, { Component } from 'react';
// Components
import Music from './Music';

class PlayList extends Component {
  constructor() {
    super();
    this.state = {
      list: []
    }
    this.deleteVideo = this.deleteVideo.bind(this);
  }

  componentWillReceiveProps(props) {
    let video = props.video;
    if (video !== undefined) {
      this.setState({ list: [...this.state.list, video]});
    }
  }

  deleteVideo(index) {
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  render() {
    return(
      <div className='player-section'>
        {this.state.list.map((item, index) => {
          return <Music key={index}
                        id={item.id.videoId}
                        title={item.snippet.title}
                        deleteVideo={this.deleteVideo}
                        index={index} />
        })}
      </div>
    );
  }
}

export default PlayList;
