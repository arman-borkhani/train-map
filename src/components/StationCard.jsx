import { Card, CardContent } from './ui/card'
import { useContext } from 'react'
import { StationContext } from '@/App'

const StationCard = ({ station }) => {
  const { selectedStationId, setSelectedStationId } = useContext(StationContext)
  const selected = selectedStationId === station.id

  return (
    <Card
      onClick={() => setSelectedStationId(station.id)}
      className={
        selected ? 'cursor-pointer border-2 border-primary' : 'cursor-pointer'
      }
      role="button"
      tabIndex={0}
    >
      <CardContent>
        <h2 className="font-semibold mb-0.5">{station.name}</h2>
        <div className="text-sm text-muted-foreground">{station.city}</div>
      </CardContent>
    </Card>
  )
}

export default StationCard
