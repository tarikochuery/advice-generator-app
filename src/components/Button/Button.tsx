import React, { FormEvent } from "react";
import './style.css'

interface ButtonProps {
  onClick: (e: FormEvent) => void,
  isDisabled: boolean
}

const Button: React.FC<ButtonProps> = ({onClick, isDisabled = false}) => {
  let btnClass = 'enabled'
  isDisabled ? btnClass = 'disabled' : btnClass = 'enabled'

  return (
    <button disabled={isDisabled} className={`btn ${btnClass}`} onClick={onClick}>
      <img src="./icon-dice.svg" alt="dice" className="dice" />
    </button>
  )
}

export default Button