import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllUsers } from "../_redux/Actions";
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
