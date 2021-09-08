import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from "../components/Menu";
import Card from "../components/Card";
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

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
