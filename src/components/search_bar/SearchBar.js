import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
// Components
import SearchButton from './SearchButton';
import SearchInput from './SearchInput';
import Form from '../commons/Form';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      videos: []
    };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchButton = this.handleSearchButton.bind(this);
  }

  handleSearchButton() {
    this.props.search(this.state.text);
  }

  handleSearchInput(text) {
    this.setState({text});
  }

  render() {
    return(
      <div className='search-bar-container'>
        <Form>
          <SearchInput onChange={this.handleSearchInput} />
          <SearchButton onClick={this.handleSearchButton} />
        </Form>
      </div>
    );
  }
}

export default SearchBar;
