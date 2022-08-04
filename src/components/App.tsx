import React, { FormEvent, useEffect, useState } from 'react';
import getAdvice, { AdviceI } from '../scripts/getAdvice';
import Advice from './Advice/Advice';
import Button from './Button/Button';
import './style.css'

function App() {
  const [isDisabled, setIsDisabled] = useState(false)
  const [adviceData, setAdviceData] = useState<AdviceI>()
  
  const changeAdvice = async () => {
    const newAdviceData = await getAdvice()
    setAdviceData(newAdviceData)
  }

  const handleClickButton = (e: FormEvent) => {
    e.preventDefault()
    toggleDisableButton()
    changeAdvice()
  }

  const toggleDisableButton = () => {
    setIsDisabled(true)
    setTimeout(() => {
      setIsDisabled(false)
    }, 2000)
  }

  useEffect(() => {
    const fetchAdvice = async () => {
      const adviceObject = await getAdvice()
      setAdviceData(adviceObject)
    }

    fetchAdvice()
  }, [])

  console.log('Renderizou')

  if (adviceData){
    return (
      <div className='app-container'>
        <div className='advice-container'>
          <Advice advice={adviceData.advice} id={adviceData.id} />
          <div className='divider'>
            <div className='horizontal-line'></div>
            <div className='vertical-dash'></div>
            <div className='vertical-dash'></div>
            <div className='horizontal-line'></div>
          </div>
        </div>
        <Button onClick={handleClickButton} isDisabled={isDisabled}/>
      </div>
    )
  } else {
    return (
      <div className='app-container'>
        <div className="advice-container">
          loading...
          <div className='divider'>
            <div className='horizontal-line'></div>
            <div className='vertical-dash'></div>
            <div className='vertical-dash'></div>
            <div className='horizontal-line'></div>
          </div>
        </div>
        <Button onClick={handleClickButton} isDisabled={isDisabled}/>
      </div>
    )
  }
}

export default App;
