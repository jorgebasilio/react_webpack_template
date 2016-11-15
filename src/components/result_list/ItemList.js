import React, { Component } from 'react';
import Item from './Item';

class ItemList extends Component {
  render() {
    let items = this.props.musicList.map((value, index) => {
      return <Item key={index} title={value.title} />
    });
    return <div> { items } </div>
  }
}

ItemList.defaultProps = {
  musicList: [
    { title: 'Closer' },
    { title: 'This is What you come for' },
    { title: 'Dont let me down' },
    { title: 'Heathens' }
  ]
}

export default ItemList;
