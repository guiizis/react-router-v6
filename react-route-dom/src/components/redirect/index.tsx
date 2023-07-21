import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'

export const Redirect = () => {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 5000)
  }, [])

  return (
    <h1>you gonna leave this page in: 5 seconds</h1>
  )
}