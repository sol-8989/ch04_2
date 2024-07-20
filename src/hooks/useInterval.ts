import {useEffect} from 'react'

export const useIntaval = (callcack: () => void, duration: number = 1000) => {
  useEffect(() => {
    const id = setInterval(callcack, duration)
    return () => clearInterval(id)
  }, [callcack, duration])
}
