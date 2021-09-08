import React, { Component } from 'react'
import { connect } from 'react-redux'
import usersAction from "../_redux/Actions/usersActions";

const { getUser } = usersAction;

class Profile extends Component {

    componentDidMount= async () => {
        await this.props.getUser(this.props.match.params.id);
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.pro.user
    }
}



export default connect(mapStateToProps, {getUser})(Profile)
