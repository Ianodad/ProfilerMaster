import React, { Component } from 'react'
import { connect } from 'react-redux'
import usersAction from "../_redux/Actions/usersActions";

const { getUser } = usersAction;

export class Profile extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
