import Lottie from 'lottie-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// import {
//   CSSGrid,
//   measureItems,
//   makeResponsive,
//   layout,
// } from "react-stonecutter";
import usersAction from '../_redux/Actions/usersActions';
// import Card from '../components/Card';
import MainLayout from '../components/layouts/MainLayout';
import LoadingAnimation from '../lottie/loading.json';
import CardTwo from '../components/CardTwo';

const { getAllUsers } = usersAction;

// const Grid = makeResponsive(measureItems(CSSGrid), {
//   maxWidth: 1920,
//   minPadding: 100,
// });
class Home extends Component {
  /* eslint-disable-next-line */
    async componentDidMount() {
      // eslint-disable-next-line no-shadow
    const { getAllUsers, users } = this.props;

    if (users.length === 0) {
      await getAllUsers();
    }
  }

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    const { users } = this.props;
    return (
      <>
        <MainLayout>
          {users ? (
            <div className="row flex-wrap">
              {users && users?.map((user) => (
                // <Card key={user.id} user={user} />
                <CardTwo key={user.id} user={user} />
              ))}
            </div>
          ) : (
            <Lottie animationData={LoadingAnimation} />
          )}
        </MainLayout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.Profile.allUsers,
  };
};

export default connect(mapStateToProps, { getAllUsers })(Home);
