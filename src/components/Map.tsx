import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

export const Map = () => {
  return (
    <MapContainer center={[25.5354108, -103.4358962]} zoom={15} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[25.5354108, -103.4358962]}>
        <Popup>
          <div style={{textAlign: 'center'}}>
            <b>Aqui nos puedes encontrar.</b> <br />
            <img src='TutoriasUbicacion.jpeg' width={'50%'} style={{marginTop: '4px'}} />
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}