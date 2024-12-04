import React from 'react'
import { capitalizeAllLetters } from '../helpers/stringModifier'

const Button = ({ children, disabled, variant = 'primary' }) => {
  const buttonStyle = {
    primary: 'bg-[#C5C9D0] hover:bg-[#D9DDE3] active:bg-[#61656E] text-[#161616] active:text-white disabled:active:text-[#161616] disabled:hover:bg-[#C5C9D0] disabled:active:bg-[#C5C9D0]',
    secondary: 'bg-[#3A362F] hover:bg-[#26221C] active:bg-[#9E9A91] text-[#E9E9E9] active:text-black disabled:active:text-[#E9E9E9] disabled:hover:bg-[#3A362F] disabled:active:bg-[#3A362F]'
  };

  const renderButton = (variant) => {
    return buttonStyle[variant]
  }

  return (
    <button disabled={disabled} className={`${renderButton(variant)} disabled:opacity-40 min-w-[80px] min-h-[28px] px-2 text-xs`}>
      {typeof children === 'string' ? capitalizeAllLetters(children) : children}
    </button>
  )
}

export default Button
