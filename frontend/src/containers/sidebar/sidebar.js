import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import * as fetchExpenses from "../../actions/sidebar/expenses"
import CommonComponents from '../../components/common';
import Tabs from '../../components/sidebar/tabs';
import ListSidebar from '../../components/sidebar/list';
import Paper from '@material-ui/core/Paper';




class Sidebar extends Component {
    componentDidMount() {
<<<<<<< HEAD
<<<<<<< HEAD

      let { dispatch } = this.props
      if (!this.props.expenses.isLoading && this.props.expenses.data === undefined ) {
=======
    	let { dispatch } = this.props
    	if (!this.props.expenses.isLoading && this.props.expenses.data === undefined ) {
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
=======
    	let { dispatch } = this.props
    	if (!this.props.expenses.isLoading && this.props.expenses.data === undefined ) {
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
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
<<<<<<< HEAD
<<<<<<< HEAD
                	<TabsSidebar expenses={expenses} incomes={incomes}/>

=======
                	<Tabs />
                  <ListSidebar items={expenses.data}/>
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
=======
                	<Tabs />
                  <ListSidebar items={expenses.data}/>
>>>>>>> parent of 35ef6c7... budget form, modal, and expense form implemented... bugs exist, loads last users expenses and incomes until first reload when a user signs in
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


















