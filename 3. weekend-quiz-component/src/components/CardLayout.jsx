import React from 'react'

const CardLayout = ({ children }) => {
  return (
    <div role='button'>
      <div className='p-4 border border-[#CED2D9]'>
        {children}
      </div>
      <div className='h-1 bg-[#CED2D9]' />
    </div>
  )
}

export default CardLayout
