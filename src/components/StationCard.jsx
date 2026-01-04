import { Card, CardContent } from './ui/card'

const StationCard = ({ station }) => {
  return (
    <Card key={station.id}>
      <CardContent>
        <h2 className="font-semibold mb-0.5">{station.name}</h2>
        <div className="text-sm text-muted-foreground">{station.city}</div>
      </CardContent>
    </Card>
  )
}

export default StationCard
