import React, { Component } from 'react';
// Components
import SearchButton from './search_bar/SearchButton';
import SearchInput from './search_bar/SearchInput';
import Form from './commons/Form';
import ItemList from './result_list/ItemList'

class App extends Component {
  render() {
    return(
      <div>
        <Form>
          <SearchInput />
          <SearchButton />
        </Form>
        <ItemList />
      </div>
    );
  }
}

export default App;
