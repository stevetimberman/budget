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

	exp_inc (value, item) {
		let name_descr = item.name + " - " + item.description ;
		if (value == 0){
			return <ListItemSidebar key={item.id} dataName={name_descr} dataMoney={item.cost}/>
		} else {
			return <ListItemSidebar key={item.id} dataName={item.name} dataMoney={item.pay}/>
		}
	}

	handleClick = () => {
		let {openModal} = this.props;
		openModal();
	}

	render () {
		let { items, value } = this.props;
		let allItems = []

		let fabStyle = {
			position: 'absolute',
			bottom: 4,
			right: 2,
		}

		items.forEach((item) => {
	        let node = (
	            this.exp_inc(value, item)
	        )
        	allItems.push(node)
    	})

		return (
		<List>
			{allItems}
			<ListItem>
				<Button onClick={this.handleClick} variant="fab" color="secondary" style={fabStyle} >
					<AddIcon />
				</Button>
			</ListItem>
		</List>
		)


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
