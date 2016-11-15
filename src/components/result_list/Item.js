import React, { Component } from 'react';

class Item extends Component {
  render() {
    return(
      <div>
        <h4>{this.props.title}</h4>
        <button>Agregar</button>
      </div>
    )
  }
}

export default Item;
