import { StationContext } from '@/App'
import { useContext } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const MapView = () => {
  const { stations } = useContext(StationContext)

  return (
    <MapContainer
      className="h-[50vh] md:h-screen"
      center={[51.17, 10.45]}
      zoom={6}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stations.length > 0 &&
        stations.map((station) => (
          <Marker key={station.id} position={[station.lat, station.lng]}>
            <Popup>{station.name}</Popup>
          </Marker>
        ))}
    </MapContainer>
  )
}

export default MapView
