import React, { Component } from 'react';
// Components
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Form from '../commons/Form';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleSearchButton() {
    console.log(this.state.text);
  }

  handleSearchInput(text) {
    this.setState({text});
  }

  render() {
    return(
      <div>
        <Form>
          <SearchInput onChange={this.handleSearchInput} />
          <SearchButton onClick={this.handleSearchButton} />
        </Form>
      </div>
    );
  }
}

export default SearchBar;
