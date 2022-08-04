import React from "react";
import './style.css'

interface AdviceProps {
  id: number
  advice: string
}

const Advice: React.FC<AdviceProps> = ({advice, id}) => {
  console.log('Renderizou')

  if (advice && id) {
    return (
      <>
        <p className="id">ADVICE #{id}</p>
        <div className="advice-container">
          {`"${advice}"`}
        </div>
      </>
    )
  } else {
    return (
      <div className="advice-container">
        loading...
      </div>
    )
  }
  
}

export default Advice