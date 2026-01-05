import { useStations } from '@/hooks/useStations'
import { createContext, useState } from 'react'
import StationList from './components/StationList'
import MapView from './components/MapView'
import CityFilter from './components/CityFilter'

export const StationContext = createContext(null)

const App = () => {
  const { stations, loading, error } = useStations()
  const [selectedStationId, setSelectedStationId] = useState(null)
  const [cityFilter, setCityFilter] = useState(null)

  const filteredStations = cityFilter
    ? stations.filter((s) => s.city === cityFilter)
    : stations

  const stationContextValue = {
    stations: filteredStations,
    loading,
    error,
    selectedStationId,
    setSelectedStationId,
    cityFilter,
    setCityFilter,
    allStations: stations,
  }

  return (
    <StationContext.Provider value={stationContextValue}>
      <div className="grid grid-cols-12">
        <div className="col-span-full md:col-span-7 lg:col-span-8">
          <MapView />
        </div>
        <div className="col-span-full md:col-span-5 lg:col-span-4">
          <div className="h-[50vh] md:h-screen overflow-hidden relative pt-20">
            <CityFilter />
            <StationList />
          </div>
        </div>
      </div>
    </StationContext.Provider>
  )
}

export default App
