import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Leaflet 기본 스타일
import L from "leaflet";

// 마커 아이콘 수정 (기본 아이콘 문제 해결)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponentMarking = () => {
  // 서울 시청 위치
  const position = [37.5665, 126.9780];

  return (
    <MapContainer center={position} zoom={13} className="leaflet-container">
      {/* OSM 타일 추가 */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* 마커 추가 */}
      <Marker position={position}>
        <Popup>서울 시청<br />대한민국 서울</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponentMarking;
