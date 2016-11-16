import React, { Component, PropTypes } from 'react';
import Item from './Item';

class ItemList extends Component {

  filterItems(key) {
    return this.props.musicList.filter((item) => {
      let text = key.toLowerCase();
      return item.title.toLowerCase().match(text);
    });
  }

  render() {
    let items = this.filterItems(this.props.text).map((value, index) => {
      return <Item key={index} title={value.title} />
    });
    return <div className='result-list' > { items } </div>
  }
}

ItemList.defaultProps = {
  musicList: [
    { title: 'Closer' },
    { title: 'This is What you come for' },
    { title: 'Dont let me down' },
    { title: 'Heathens' }
  ]
};

export default ItemList;
