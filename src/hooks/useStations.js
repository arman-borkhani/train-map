import { useState, useEffect } from 'react'
import { fetchStations } from '../services/stationsApi'

export const useStations = () => {
  const [stations, setStations] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getStations = async () => {
      try {
        const data = await fetchStations()
        setStations(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getStations()
  }, [])

  return { stations, loading, error }
}
