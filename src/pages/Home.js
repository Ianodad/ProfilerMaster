// import Lottie from 'lottie-react';
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
import CardTwo from '../components/Card';
// import Card from '../components/Card';
import MainLayout from '../components/layouts/MainLayout';
import Loader from '../components/Loaders/Home'
import SearchBar from '../components/SearchBar';
import SelectOrder from '../components/SelectOrder';
// import LoadingAnimation from '../lottie/loading.json';
const _ = require("lodash");

const { getAllUsers, clearUserState } = usersAction;

// const Grid = makeResponsive(measureItems(CSSGrid), {
//   maxWidth: 1920,
//   minPadding: 100,
// });
const { fadeDown,  } = transitions;

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      order: '',
      orderType: '',
    };
  }

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

  onHandleChange = (query) => {
    // console.log(query);
    this.setState({ searchTerm: query });
  } 

  // eslint-disable-next-line consistent-return
  getColumWidth = (width) => {
    if (width <= 600) {
      return '100%';
    } if (width > 600 && width <= 800) {
      return '60%';
    } if (width > 800 && width <= 1000) {
      return '40%';
    } if (width > 1000 && width <= 1200) {
      return '30%';
    } if (width > 1200 && width <= 1600) {
      return '23%';
    } if (width > 1600 && width <= 1920) {
      return '23%';
    }

  }

  selectOnChange=({value})=>{
    console.log(value)
    if (value === 'asc'){
      this.setState({order: 'asc'})
      this.setState({orderType: 'name'})
    } else if (value === 'desc'){
      this.setState({order: 'desc'})
      this.setState({orderType: 'name'})
    } else if (value === 'date'){
      this.setState({orderType: 'updated_at'})
      this.setState({order: 'desc'})
    }
  }

  getPageData = () => {
    
    const {searchTerm, order, orderType}=this.state
    const {users:allUsers}=this.props
    const  searchResults= !searchTerm ? allUsers : allUsers.filter((user) => {
      return user.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const results = !order ? searchResults : _.orderBy(searchResults, orderType, order)
    console.log(results)

    return results;
  }

  render() {
    const { users, size } = this.props;
    // console.log(size.width)
    const results=this.getPageData()
    // console.log(results)
    return (
      <>
        <MainLayout>
          <div className="search-bar row container mt-4 pt-2 w-100">
            <div className="searchbar col-7 container">
            <SearchBar onHandleChange={this.onHandleChange} onHandleSearch={this.onHandleSearch}/>
            </div>
            <div className="SelectOrder col-4 float-right">
              <SelectOrder selectOnChange={this.selectOnChange} className=""/>
            </div>
          </div>
          <div className="main-content mt-4 pt-4">
          {results.length > 0 ? (
            <StackGrid
              // eslint-disable-next-line no-nested-ternary
              columnWidth={this.getColumWidth(size.width)}
              appear={fadeDown.appear}
              appeared={fadeDown.appeared}
              enter={fadeDown.enter}
              entered={fadeDown.entered}
              leaved={fadeDown.leaved}
              appearDelay={1}
              duration={2000}
              easing={easings.cubicIn}
              gutterWidth={5}
              gutterHeight={5}
            >
              {users &&
                results?.map((user) => {
                  const height = this.randomNumber(400, 400)      
                  return(
                  
                  //  <Card key={user.id} user={user} />
                  <div key={user.id} style={{ height: `${height}px`, whiteSpace: 'normal',  }}>
                    <CardTwo key={user.id} user={user} height={height} />
                  </div>
                )})}
            </StackGrid>
          ) : (
            <div className="text-center">
            {/* eslint-disable-next-line no-shadow */}
            {[...Array(10)].map((i) => (
              <Loader className="" keys={i} n={users.length} />
            ))}
             {/* <Lottie animationData={LoadingAnimation} />  */}
            </div>
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
