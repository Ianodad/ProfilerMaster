import React, { Component } from 'react'
import { connect } from 'react-redux'

import usersAction from "../_redux/Actions/usersActions";
import Card from "../components/Card";
import Menu from "../components/Menu";
const { getAllUsers } = usersAction;
export class Home extends Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
          owner: ''
        };
       
      }

    componentDidMount=async()=> {
        await this.props.getAllUsers();
        console.log(this.props.users);
    }
    render() {
        this
        return (
            <div>
                <Menu />
                <Card/>
                {/* menu */}
                {/* header */}
                {/* body */}
                {/* footer */}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    
    console.log(state)
    return {
    users: state.Profile.allUsers
    
}}



export default connect(mapStateToProps, {getAllUsers})(Home)
