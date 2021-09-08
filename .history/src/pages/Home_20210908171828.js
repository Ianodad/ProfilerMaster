import React, { Component } from 'react'
import { connect } from 'react-redux'

import userAction from "../_redux/Actions/usersActions";
import Card from "../components/Card";
import Menu from "../components/Menu";
export class Home extends Component {
    render() {
        return (
            <div>
                <Menu />
                <Card/>
                {/* menu */}
                {/* header */}
                {/* body */}
                {/* footer */}

            </div>
        )
    }
}

const mapStateToProps = () => ({
    
})



export default connect(mapStateToProps, {getAllUsers})(Home)
