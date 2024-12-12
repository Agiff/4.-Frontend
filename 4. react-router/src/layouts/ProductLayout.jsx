import React from 'react'
import { Outlet } from 'react-router'

const ProductLayout = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-20 gap-5 bg-slate-600'>
      <Outlet />
    </div>
  )
}

export default ProductLayout
