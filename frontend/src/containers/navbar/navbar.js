import React, {Component} from 'react';
import Nav from '../../components/navbar/nav'


export default class Navbar extends Component {


    render() {
        let { auth } = this.props
        return (
            <div>
              	<Nav auth={auth}/>
            </div>
        )
    }
}




