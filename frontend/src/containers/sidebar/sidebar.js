import React, {Component, Fragment} from 'react';
import CommonComponents from '../../components/common';
import Tabs from '../../components/sidebar/tabs'
import Paper from '@material-ui/core/Paper';


export default class Sidebar extends Component {
    render() {
        
        return (
            <Paper>
            	<CommonComponents.DrawerBasic>
                	<Tabs />
                </CommonComponents.DrawerBasic>
            </Paper>
        )
    }
}