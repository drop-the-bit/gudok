import React from 'react'
import { ButtonProps } from './types/ButtonProps'

const Button = ({ children, ...props }: ButtonProps) => {
  const test = '1234'
  console.log(test)
  return (
    <button
      style={{
        padding: '20px',
      }}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
