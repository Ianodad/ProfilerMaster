import React, { Component } from 'react'
import { connect } from 'react-redux'
import usersAction from "../_redux/Actions/usersActions";

const { getUser } = usersAction;

class Profile extends Component {

    componentDidMount= async () => {
        await this.props.getUser(this.props.match.params.id);
    }
    render() {
        this.props.user ? console.log(this.props.user.user) : console.log("no user")
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Profile.user,
    }
}



export default connect(mapStateToProps, {getUser})(Profile)
