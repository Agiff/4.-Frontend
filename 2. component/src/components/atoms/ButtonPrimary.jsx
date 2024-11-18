import React from 'react'

const ButtonPrimary = ({ caption }) => {
  const printMessage = (message) => {
    console.log(message);
  }

  return (
    <button 
      className="bg-purple-500 min-w-20 min-h-10 rounded px-4"
      onClick={() => printMessage('Hey you!')}
    >
      { caption }
    </button>
  )
}

export default ButtonPrimary
