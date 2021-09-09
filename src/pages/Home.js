import Lottie from 'lottie-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import SizeMe from 'react-sizeme';
// import {
//   CSSGrid,
//   measureItems,
//   makeResponsive,
//   layout,
// } from "react-stonecutter";
import StackGrid, { transitions } from 'react-stack-grid';

import usersAction from '../_redux/Actions/usersActions';
import CardTwo from '../components/CardTwo';
// import Card from '../components/Card';
import MainLayout from '../components/layouts/MainLayout';
import LoadingAnimation from '../lottie/loading.json';

const { getAllUsers } = usersAction;

// const Grid = makeResponsive(measureItems(CSSGrid), {
//   maxWidth: 1920,
//   minPadding: 100,
// });
const { fadeUp } = transitions;

class Home extends Component {
  /* eslint-disable-next-line */
  async componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getAllUsers } = this.props;

      await getAllUsers();
    
  }

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    const { users, size } = this.props;
    console.log(size.width)
    return (
      <>
        <MainLayout>
          {users.length > 0 ? (
            <StackGrid
              columnWidth={size.width <= 1000 ? '80%' : '18.33%'}
              appear={fadeUp.appear}
              appeared={fadeUp.appeared}
              enter={fadeUp.enter}
              entered={fadeUp.entered}
              leaved={fadeUp.leaved}
              appearDelay={30}
              gutterWidth={3}
            >
              {users &&
                users?.map((user) => (
                  //  <Card key={user.id} user={user} />
                  <div key={user.id}>
                    <CardTwo key={user.id} user={user} />
                  </div>
                ))}
            </StackGrid>
          ) : (
            <Lottie animationData={LoadingAnimation} />
          )}
        </MainLayout>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.Profile.allUsers,
  };
};

export default connect(mapStateToProps, { getAllUsers })(SizeMe()(Home));
