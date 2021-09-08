import React, { Component } from 'react'
import { connect } from 'react-redux
'

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
        const {users} = this.props
        return (
            <div>
                <Menu />
                    <div className="container">
                    <div className="row">
                        {users.map(user=>(
                            <Card key={user.id} user={user}/>
                        ))}
                    </div>
                </div>
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
