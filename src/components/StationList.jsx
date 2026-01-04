import { StationContext } from '@/App'
import { Alert, AlertTitle } from '@/components/ui/alert'
import { useContext } from 'react'
import StationCard from './StationCard'
import { Skeleton } from './ui/skeleton'

const StationList = () => {
  const { stations, loading, error } = useContext(StationContext)
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="py-3 px-4 h-[50vh] md:h-screen overflow-auto">
      {error && (
        <Alert variant="destructive">
          <AlertTitle>{error}</AlertTitle>
        </Alert>
      )}
      <div className="space-y-3">
        {loading
          ? skeletons.map((skeleton) => <StationCardSkeleton key={skeleton} />)
          : stations.map((station) => (
              <StationCard key={station.id} station={station} />
            ))}
      </div>
    </div>
  )
}

const StationCardSkeleton = () => {
  return <Skeleton className="h-24 w-full rounded-xl" />
}

export default StationList
