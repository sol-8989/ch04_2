import {useState} from 'react'
import {useIntaval} from './useInterval'

export const useClock = () => {
  const [today, setToday] = useState(new Date())
  useIntaval(() => setToday(new Date()))
  return today
}
