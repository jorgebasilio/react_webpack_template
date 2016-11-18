import React, { Component, PropTypes } from 'react';
// Components
import ItemList from './result_list/ItemList';
import SearchBar from './search_bar/SearchBar';
// Api
import { searchVideos } from '../lib/youtube_api'


class SongFinder extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
    this.search = this.search.bind(this);
  }

  search(text) {
    if (text != '') {
    searchVideos(text)
      .then((videos) => { this.setState({videos}) })
    }
    else {
      this.setState({videos: []});
    }
  }

  render() {
    return(
      <div className='song-finder'>
        <SearchBar search={this.search}/>
        <ItemList videos={this.state.videos}
                  onClick={this.props.addVideo}/>
      </div>
    );
  }
}


export default SongFinder;
