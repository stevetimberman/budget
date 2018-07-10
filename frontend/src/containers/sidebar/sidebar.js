import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import Tabs from '../../components/sidebar/tabs'

export default class Sidebar extends Component {
    render() {
        
        return (
            <Fragment>
            	<CommonComponents.DrawerBasic>
                	<Tabs />
                </CommonComponents.DrawerBasic>
            </Fragment>
        )
    }
}