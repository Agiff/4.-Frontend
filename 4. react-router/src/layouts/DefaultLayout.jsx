import React from 'react'

const DefaultLayout = ({ children }) => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center p-20 gap-5'>
      {children}
    </div>
  )
}

export default DefaultLayout
