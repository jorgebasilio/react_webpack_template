import React, { Component } from 'react';
// Components
import SearchBar from './search_bar/SearchBar';
import ItemList from './result_list/ItemList'

class App extends Component {
  render() {
    return(
      <div>
        <SearchBar />
        <ItemList />
      </div>
    );
  }
}

export default App;
