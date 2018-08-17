import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ExpenseForm from '../../components/sidebar/expense-form'
import {closeModal} from '../../actions/sidebar/modal'
import {compose} from 'redux';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import ModalComponent from '../../components/sidebar/modal';


const Actions = {closeModal};

class ModalContainer extends Component {
  
	handleClose = () => {
    	this.props.closeModal();
  	};

	render () {
		let {modal} = this.props;
		console.log("CONTAINER")
		console.log(modal.val);
		console.log(modal.isOpen);
		console.log("CONTAINER");
		
		return (
			<div>
			  	<ModalComponent isOpen={modal.isOpen} val={modal.val} />
			</div>
		)
		
	}
}

function mapStateToProps(state) {
    return {
        modal: state.modalReducer,
    }
}

export default compose(
	connect(mapStateToProps, Actions),
	)(ModalContainer)

