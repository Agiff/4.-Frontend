import React from 'react'
import { capitalizeAllLetters } from '../helpers/stringModifier'

const Button = ({ children, disabled }) => {
  return (
    <button disabled={disabled} className='bg-[#C5C9D0] hover:bg-[#D9DDE3] active:bg-[#61656E] text-[#161616] active:text-white disabled:active:text-[#161616] disabled:opacity-40 min-w-[80px] min-h-[28px] px-2 text-xs'>
      {typeof children === 'string' ? capitalizeAllLetters(children) : children}
    </button>
  )
}

export default Button
