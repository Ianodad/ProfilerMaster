import Lottie from 'lottie-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import usersAction from '../_redux/Actions/usersActions';
import MainLayout from '../components/layouts/MainLayout';
import ProfileCard from '../components/ProfileCard';
import LoadingAnimation from '../lottie/loading.json';

const _ = require('lodash');


const { getUser, clearUserState } = usersAction;

class Profile extends Component {
  /* eslint-disable no-alert, no-console */
  componentDidMount = async () => {
      // eslint-disable-next-line no-shadow
      const { getUser}=this.props
    //  await clearUserState()
    const {
      match: {
        params: { id },
      },
    } = this.props;
    await getUser(id);
  };
  /*eslint-disable */

  componentWillUnmount() {
    const {clearUserState}=this.props

    clearUserState()
  }
    render() {
        const {user, navigation}=this.props
        console.log(user)
        return (
            <>
            <MainLayout>
                { !_.isEmpty(user) ? (<ProfileCard user={user} navigation={navigation}/>):(<Lottie animationData={LoadingAnimation} />)}
                
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



export default connect(mapStateToProps, {getUser, clearUserState})(Profile)
