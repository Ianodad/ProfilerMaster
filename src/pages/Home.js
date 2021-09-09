import React, { Component } from "react";
import { connect } from "react-redux";
import Lottie from "lottie-react";

import MainLayout from "../components/layouts/MainLayout";
import LoadingAnimation from "../lottie/loading.json"
// import {
//   CSSGrid,
//   measureItems,
//   makeResponsive,
//   layout,
// } from "react-stonecutter";

import usersAction from "../_redux/Actions/usersActions";
import Card from "../components/Card";
const { getAllUsers } = usersAction;

// const Grid = makeResponsive(measureItems(CSSGrid), {
//   maxWidth: 1920,
//   minPadding: 100,
// });
class Home extends Component {
  constructor(props) {
    super(props);

  }
  /* eslint-disable-next-line */
  async componentDidMount(){
    await this.props.getAllUsers();
    console.log(this.props.users);
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
            {users.map((user) => (
              <Card key={user.id} user={user} />
            ))}
          </div>
          ):(
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
