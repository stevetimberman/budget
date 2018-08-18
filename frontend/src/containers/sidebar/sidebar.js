import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as fetchExpenses from "../../actions/sidebar/expenses"
import * as fetchIncomes from "../../actions/sidebar/incomes"


import CommonComponents from '../../components/common';
import TabsSidebar from '../../components/sidebar/tabs';
import Paper from '@material-ui/core/Paper';




class Sidebar extends Component {
    componentDidMount() {

      let { dispatch } = this.props
      if (!this.props.expenses.isLoading && this.props.expenses.data === undefined ) {
            dispatch(fetchExpenses.fetchExpenses());
        }if (!this.props.incomes.isLoading && this.props.incomes.data === undefined) {
            dispatch(fetchIncomes.fetchIncomes());
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
    	let { expenses, incomes } = this.props;  
    	if (expenses.data == undefined){
    		return this.renderLoading();
    	}else if (incomes.data == undefined) {
        return this.renderLoading();
      }return (
            <Paper>
                	<TabsSidebar expenses={expenses} incomes={incomes}/>

            </Paper>
        )
    }
}


function mapStateToProps(state) {
    return {
        expenses: state.expensesReducer,
        incomes: state.incomesReducer,
    }
}

export default connect(mapStateToProps)(Sidebar);


















