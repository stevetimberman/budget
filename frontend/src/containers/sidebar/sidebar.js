import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import * as fetchExpenses from "../../actions/sidebar/expenses"
import CommonComponents from '../../components/common';
import Tabs from '../../components/sidebar/tabs';
import ListSidebar from '../../components/sidebar/list';
import Paper from '@material-ui/core/Paper';




class Sidebar extends Component {
    componentDidMount() {
    	let { dispatch } = this.props
    	if (!this.props.expenses.isLoading && this.props.expenses.data === undefined ) {
            dispatch(fetchExpenses.fetchExpenses());
        }
    }

   	renderLoading() {
   		return (
   			<div>
   				<CommonComponents.CircularProgressBasic/>
   			</div>
   			)
   	}

    render() {
    	let { expenses } = this.props;  
    	if (expenses.data == undefined){
    		return this.renderLoading()
    	}  
        return (
            <Paper>
                	<Tabs />
                  <ListSidebar items={expenses.data}/>
            </Paper>
        )
    }
}


function mapStateToProps(state) {
    return {
        expenses: state.expensesReducer
    }
}

export default connect(mapStateToProps)(Sidebar);


















