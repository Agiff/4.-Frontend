import React from 'react'
import { Outlet } from 'react-router'

const DefaultLayout = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-20 gap-5'>
      <Outlet />
    </div>
  )
}

export default DefaultLayout
