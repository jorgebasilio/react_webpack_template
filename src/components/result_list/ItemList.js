import React, { Component, PropTypes } from 'react';
import Item from './Item';

class ItemList extends Component {

  render() {
    let items = this.props.videos.map((value, index) => {
      return <Item key={index}
                   id={value.id}
                   kind={value.kind}
                   snippet={value.snippet}
                   onClick={this.props.onClick}/>
    });
    return <div className='result-list' > { items } </div>
  }
}

export default ItemList;
