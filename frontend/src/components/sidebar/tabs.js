import React from 'react'
import CommonComponents from '../common'


function Tabs(props) {
	return (
		<div>
		<CommonComponents.AppBarBasic>
			<CommonComponents.TabsBasic>
				
				<CommonComponents.TabBasic label="Expenses"/>
				<CommonComponents.TabBasic label="Income"/>
				
			</CommonComponents.TabsBasic>
		</CommonComponents.AppBarBasic>
		</div>
		)
}

export default Tabs;