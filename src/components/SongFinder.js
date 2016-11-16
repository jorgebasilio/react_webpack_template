import React, { Component, PropTypes } from 'react';
// Components
import ItemList from './result_list/ItemList';
import SearchBar from './search_bar/SearchBar';

class SongFinder extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.search = this.search.bind(this);
  }

  search(text) {
    this.setState({text})
  }

  render() {
    return(
      <div className='song-finder'>
        <SearchBar search={this.search}/>
        <ItemList text={this.state.text}/>
      </div>
    );
  }
}


export default SongFinder;
