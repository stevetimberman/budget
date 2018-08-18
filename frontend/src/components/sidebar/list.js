import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItemSidebar from './list-item'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ListItem from '@material-ui/core/ListItem';
import * as modalActions from '../../actions/sidebar/modal'
import {connect} from 'react-redux';

class ListSidebar extends Component {



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




