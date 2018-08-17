import  React, { Component } from 'react'
import CommonComponents from '../common'
import ListSidebar from './list'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {setVal} from '../../actions/sidebar/modal'
import {connect} from 'react-redux';

const Actions = {setVal}

class TabsSidebar extends Component {

	state = {
		value: 0,
	}

	handleChange = (event, value) => {
		let { setVal } = this.props;
		this.setState({value});
		setVal(value);
	}

	render () {
		const { value } = this.state;
		const { expenses, incomes } = this.props
		return (
			<div>
				<CommonComponents.AppBarBasic>
					<Tabs value={value} color='primary' onChange={this.handleChange}>		
						<Tab label="Expenses"/>
						<Tab label="Income"/>
					</Tabs>
				</CommonComponents.AppBarBasic>
				{value === 0 && <ListSidebar items={expenses.data} value={0}/>}
				{value === 1 && <ListSidebar items={incomes.data} value={1}/>}
			</div>
		)
	}

}

export default connect(null, Actions)(TabsSidebar)




