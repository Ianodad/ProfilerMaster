import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainLayout from '../components/layouts/MainLayout';
import ProfileCard from '../components/ProfileCard';
import usersAction from "../_redux/Actions/usersActions";

const { getUser } = usersAction;

class Profile extends Component {

    componentDidMount= async () => {
        await this.props.getUser(this.props.match.params.id);
    }
    render() {
        const {user}=this.props
        return (
            <>
            <MainLayout>
                <ProfileCard user={user}/>
            </MainLayout>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.Profile.user,
    }
}



export default connect(mapStateToProps, {getUser})(Profile)
