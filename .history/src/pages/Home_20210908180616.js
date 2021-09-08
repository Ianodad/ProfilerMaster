import React, { Component } from "react";
import { connect } from "react-redux";
import { SpringGrid } from "react-stonecutter";

import usersAction from "../_redux/Actions/usersActions";
// import Card from "../components/Card";
import Menu from "../components/Menu";
const { getAllUsers } = usersAction;
export class Home extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = {
      owner: "",
    };
  }

  componentDidMount = async () => {
    await this.props.getAllUsers();
    console.log(this.props.users);
  };
  render() {
    // const { users } = this.props;
    return (
      <div>
        <Menu />
        <div className="container">
          {/* <div className="row">
                        {users.map(user=>(
                            <Card key={user.id} user={user}/>
                        ))}
                    </div> */}
          <SpringGrid
            component="ul"
            columns={5}
            columnWidth={150}
            gutterWidth={5}
            gutterHeight={5}
            itemHeight={200}
            springConfig={{ stiffness: 170, damping: 26 }}
          >
              <li key="A">A</li>
  <li key="B">B</li>
  <li key="C">C</li>

                    

          </SpringGrid>
        </div>
      </div>
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
