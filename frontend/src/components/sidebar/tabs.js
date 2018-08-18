import React from 'react'
import CommonComponents from '../common'

<<<<<<< HEAD

<<<<<<< HEAD

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
=======
=======

>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
function Tabs(props) {
	return (
		
			<CommonComponents.AppBarBasic>
				<CommonComponents.TabsBasic>
				
					<CommonComponents.TabBasic label="Expenses"/>
					<CommonComponents.TabBasic label="Income"/>
				
				</CommonComponents.TabsBasic>
			</CommonComponents.AppBarBasic>
		
<<<<<<< HEAD
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
		)
}

<<<<<<< HEAD
export default connect(null, Actions)(TabsSidebar)


=======
export default Tabs;
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
=======
		)
}

export default Tabs;
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
