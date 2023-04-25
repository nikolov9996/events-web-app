import React from 'react'
import { Outlet } from 'react-router-dom'

const index = () => {
  return (
    <>
    <div>Layout</div>
    <Outlet/>
    </>
  )
}

export default index