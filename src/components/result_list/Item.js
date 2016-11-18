import React, { Component, PropTypes } from 'react';

class Item extends Component {
  constructor() {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.onClick(this.props.id, this.props.snippet);
  }

  render() {
    return(
      <div className='item-container' >
        <h5>{this.props.snippet.title}</h5>
        <button onClick={this._onClick} className='add-button-list-search'>+</button>
      </div>
    )
  }
}

Item.propTypes = {
  id: PropTypes.object.isRequired,
  kind: PropTypes.string.isRequired,
  snippet: PropTypes.object.isRequired
}


export default Item;
