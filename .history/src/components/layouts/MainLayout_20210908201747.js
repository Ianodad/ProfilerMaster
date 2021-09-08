import React from 'react'
import Menu from "../layouts/MainLayout";

const MainLayout=({children) => {
    return (
        <>
        <Menu />
        <div className="container">
            {children}
        </div>     
        </>
    )
}

export default MainLayout
