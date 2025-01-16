// MapComponent.js
import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <MapContainer
        center={[51.505, -0.09]} // 초기 중심 좌표 (위도, 경도)
        zoom={13} // 초기 줌 레벨
        style={{ height: '100%', width: '100%' }}
      >
        {/* OpenStreetMap 기본 타일 레이어 */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
