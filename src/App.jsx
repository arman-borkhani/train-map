import { useStations } from '@/hooks/useStations'
import { createContext } from 'react'
import StationList from './components/StationList'

export const StationContext = createContext(null)

const App = () => {
  const { stations, loading, error } = useStations()
  const stationContextValue = {
    stations,
    loading,
    error,
  }

  return (
    <StationContext.Provider value={stationContextValue}>
      <div className="grid grid-cols-12">
        <div className="col-span-full md:col-span-7 lg:col-span-8">
          <div className="h-[50vh] md:h-screen bg-gray-50"></div>
        </div>
        <div className="col-span-full md:col-span-5 lg:col-span-4">
          <StationList />
        </div>
      </div>
    </StationContext.Provider>
  )
}

export default App
