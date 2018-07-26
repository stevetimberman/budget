import React from 'react'
import CommonComponents from '../common'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function ListItemSidebar(props) {
	//needs props data = Expense object
	let { data } = props;
	console.log(data);
	return (
			<ListItem>
				<ListItemText  primary={data.cost} secondary={data.name}/>
			</ListItem>
		)
}

export default ListItemSidebar;