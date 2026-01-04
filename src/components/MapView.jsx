import { StationContext } from '@/App'
import { useContext, useEffect, useRef } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'

const Markers = ({ stations, selectedStationId }) => {
  const map = useMap()
  const markerRefs = useRef({})

  useEffect(() => {
    if (!selectedStationId) return
    const station = stations.find((s) => s.id === selectedStationId)
    if (!station) return
    const { lat, lng } = station
    try {
      map.flyTo([lat, lng], 10)
    } catch (e) {
      map.setView([lat, lng], 10)
    }

    const marker = markerRefs.current[station.id]
    if (marker && typeof marker.openPopup === 'function') {
      marker.openPopup()
    } else if (marker && marker.getPopup) {
      // fallback
      marker.getPopup &&
        marker.getPopup().openOn &&
        marker.getPopup().openOn(map)
    }
  }, [selectedStationId, stations, map])

  return (
    <>
      {stations.map((station) => (
        <Marker
          key={station.id}
          position={[station.lat, station.lng]}
          ref={(el) => {
            if (el) markerRefs.current[station.id] = el
          }}
        >
          <Popup>{station.name}</Popup>
        </Marker>
      ))}
    </>
  )
}

const MapView = () => {
  const { stations, selectedStationId } = useContext(StationContext)

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
      {stations.length > 0 && (
        <Markers stations={stations} selectedStationId={selectedStationId} />
      )}
    </MapContainer>
  )
}

export default MapView
