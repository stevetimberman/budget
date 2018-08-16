import React from 'react'
import CommonComponents from '../common'
import List from '@material-ui/core/List';
import ListItemSidebar from './list-item'


function ListSidebar(props) {
  let { items } = props;
  let allItems = []
  console.log(items);
    items.forEach((item) => {
        let node = (
            <ListItemSidebar key={item.id} data={item}/>
        )
        allItems.push(node)
    })

  return (
    <List>{allItems}</List>
    )
  
}

export default ListSidebar;
