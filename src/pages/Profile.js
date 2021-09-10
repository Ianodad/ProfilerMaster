import Lottie from 'lottie-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import usersAction from '../_redux/Actions/usersActions';
import MainLayout from '../components/layouts/MainLayout';
import ProfileCard from '../components/ProfileCard';
import LoadingAnimation from '../lottie/loading.json';

const { getUser } = usersAction;

class Profile extends Component {
  /* eslint-disable no-alert, no-console */
  componentDidMount = async () => {
      // eslint-disable-next-line no-shadow
      const {getUser}=this.props
    const {
      match: {
        params: { id },
      },
    } = this.props;
    await getUser(id);
  };
  /*eslint-disable */

  componentWillUnmount() {
    
  }
    render() {
        const {user, navigation}=this.props
        return (
            <>
            <MainLayout>
                { user ? (<ProfileCard user={user} navigation={navigation}/>):(<Lottie animationData={LoadingAnimation} />)}
                
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
