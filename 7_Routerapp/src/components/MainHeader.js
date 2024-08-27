import React from 'react'
import { Outlet } from 'react-router-dom'


const MainHeader = () => {
    return (
        <div>
       
         <Outlet/>
          {"//this allow child to display"}
        </div>
      )
}

export default MainHeader
