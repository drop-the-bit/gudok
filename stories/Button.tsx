import React from 'react'
import { ButtonProps } from '../packages/components/Button/src/types'

interface MyButtonProps extends ButtonProps {
  /**
   * 내용물
   */
  children?: string
}

export const Button = ({ children, ...props }: MyButtonProps) => {
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
