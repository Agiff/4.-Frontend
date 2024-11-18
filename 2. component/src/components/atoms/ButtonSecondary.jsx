import React from 'react'

const ButtonSecondary = ({ children }) => {
  return (
    <button 
      className="bg-green-500 min-w-20 min-h-10 rounded px-4"
      onClick={() => {
        console.log('Hawayuu')
        console.log('Todei');
      }}
    >
      { children }
    </button>
  )
}

export default ButtonSecondary
