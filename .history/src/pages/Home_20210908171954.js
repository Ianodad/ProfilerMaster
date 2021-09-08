import React, { Component } from 'react'
import { connect } from 'react-redux'

import {getUsers} from "../_redux/Actions/usersActions";
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



export default connect(mapStateToProps, {getUsers})(Home)
