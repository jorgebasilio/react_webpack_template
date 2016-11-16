import React, { Component } from 'react';

class Item extends Component {
  render() {
    return(
      <div className='item-container' >
        <h4>{this.props.title}</h4>
        <button className='add-button-list-search'>+</button>
      </div>
    )
  }
}

export default Item;
