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
import StackGrid, { easings,transitions } from 'react-stack-grid';

import usersAction from '../_redux/Actions/usersActions';
import CardTwo from '../components/CardTwo';
// import Card from '../components/Card';
import MainLayout from '../components/layouts/MainLayout';
import LoadingAnimation from '../lottie/loading.json';

const { getAllUsers, clearUserState } = usersAction;

// const Grid = makeResponsive(measureItems(CSSGrid), {
//   maxWidth: 1920,
//   minPadding: 100,
// });
const { fadeDown,  } = transitions;

class Home extends Component {
  /* eslint-disable-next-line */
  async componentDidMount() {
    // eslint-disable-next-line no-shadow
    const { getAllUsers } = this.props;

      await getAllUsers();
    
  }
  
  componentWillUnmount() {
    // eslint-disable-next-line no-shadow
    const {clearUserState}=this.props

    clearUserState()
  }

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  render() {
    const { users, size } = this.props;
    // console.log(size.width)
    return (
      <>
        <MainLayout>
          
          <div className="main-content mt-4 pt-4">
          {users.length > 0 ? (
            <StackGrid
              columnWidth={size.width <= 1000 ? '80%' : '18.33%'}
              appear={fadeDown.appear}
              appeared={fadeDown.appeared}
              enter={fadeDown.enter}
              entered={fadeDown.entered}
              leaved={fadeDown.leaved}
              appearDelay={30}
              duration={2000}
              easing={easings.cubicIn}
              gutterWidth={5}
              gutterHeight={5}
            >
              {users &&
                users?.map((user) => {
                  const height = this.randomNumber(400, 450)      
                  return(
                  
                  //  <Card key={user.id} user={user} />
                  <div key={user.id} style={{ height: `${height}px`, whiteSpace: 'normal',  }}>
                    <CardTwo key={user.id} user={user} height={height} />
                  </div>
                )})}
            </StackGrid>
          ) : (
            <Lottie animationData={LoadingAnimation} />
          )}

          </div>
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

export default connect(mapStateToProps, { getAllUsers,clearUserState })(SizeMe()(Home));
