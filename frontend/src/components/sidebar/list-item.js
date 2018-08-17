import React from 'react'
import CommonComponents from '../common'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


function ListItemSidebar(props) {
	//needs props data = Expense object
	let { dataName, dataMoney } = props;
	return (
			<ListItem>
				<ListItemText  primary={dataMoney} secondary={dataName}/>
			</ListItem>
		)
}

export default ListItemSidebar;