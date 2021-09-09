import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainLayout from '../components/layouts/MainLayout';
import ProfileCard from '../components/ProfileCard';
import usersAction from "../_redux/Actions/usersActions";
import Lottie from "lottie-react";

import LoadingAnimation from "../lottie/loading.json"

const { getUser } = usersAction;

class Profile extends Component {

    /* eslint-disable no-alert, no-console */
    componentDidMount = async () => {
        await this.props.getUser(this.props.match.params.id);
    }
    /*eslint-disable */

    render() {
        const {user}=this.props
        return (
            <>
            <MainLayout>
                { user ? (<ProfileCard user={user}/>):(<Lottie animationData={LoadingAnimation} />)}
                
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
