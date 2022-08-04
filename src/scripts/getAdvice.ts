const baseURL = 'https://api.adviceslip.com/advice'

export interface AdviceI {
  id: number,
  advice: string
}

interface dataAdvice {
  slip: AdviceI
}

const getAdvice = async () => {
  const res = await fetch(baseURL)
  const data: dataAdvice = await res.json()
  const adviceObject: AdviceI = data.slip
  return adviceObject
}

export default getAdvice