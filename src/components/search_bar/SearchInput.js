import React, { Component } from 'react';

export default class SearchInput extends Component {
  constructor() {
    super();
    this._onChange = this._onChange.bind(this);
  }

  _onChange(event) {
    let text = event.target.value;
    this.props.onChange(text);
  }

  render() {
    return(<input type='text' onChange={this._onChange}/>);
  }
}
