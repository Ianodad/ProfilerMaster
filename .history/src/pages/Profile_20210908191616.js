import React, { Component } from 'react'
import { connect } from 'react-redux'
import usersAction from "../_redux/Actions/usersActions";

const { getUser } = usersAction;

class Profile extends Component {

    componentDidMount= async () => {
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})



export default connect(mapStateToProps, {getUser})(Profile)
