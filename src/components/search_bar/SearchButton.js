import React, { Component } from 'react';

export default class SearchButtom extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick(event) {
    event.preventDefault();
    this.props.onClick();
  }

  render() {
    return(<button onClick={this._onClick}>Buscar</button>);
  }
}
