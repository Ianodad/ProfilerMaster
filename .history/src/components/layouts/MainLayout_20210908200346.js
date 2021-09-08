import React from 'react'
import Menu from "../layouts/MainLayout";

const MainLayout=(children) => {
    return (
        <div>
        <Menu />
        <div className="container">
            {children}
        </div>
            
        </div>
    )
}

export default MainLayout
