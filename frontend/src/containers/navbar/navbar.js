import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';

export default class Navbar extends Component {
    render() {
        
        return (
            <Fragment>
              	<CommonComponents.AppBarBasic>
              		<CommonComponents.TypographyBasic >
              			BudgetApp
              		</CommonComponents.TypographyBasic>
              	</CommonComponents.AppBarBasic>
            </Fragment>
        )
    }
}