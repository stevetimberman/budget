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
<<<<<<< HEAD

<<<<<<< HEAD
=======
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in

	return (
		<List>{allItems}</List>
		)
<<<<<<< HEAD


	}


}

export default connect(null, modalActions)(ListSidebar);




=======
	return (
		<List>{allItems}</List>
		)
	
}

export default ListSidebar;
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
=======
	
}

export default ListSidebar;
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
