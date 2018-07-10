import React from 'react'
import CommonComponents from '../common'


function Tabs(props) {
	return (
		
			<CommonComponents.AppBarBasic>
				<CommonComponents.TabsBasic>
				
					<CommonComponents.TabBasic label="Expenses"/>
					<CommonComponents.TabBasic label="Income"/>
				
				</CommonComponents.TabsBasic>
			</CommonComponents.AppBarBasic>
		
		)
}

export default Tabs;