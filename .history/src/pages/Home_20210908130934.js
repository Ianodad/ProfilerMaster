import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Home extends Component {
    render() {
        return (
            <div>
                p{hello}    
            </div>
        )
    }
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)