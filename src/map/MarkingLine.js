import React from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// 마커 아이콘 수정 (기본 아이콘 문제 해결)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MarkingLine = () => {
  // 마커 위치 배열
  const markers = [
    { position: [37.5665, 126.9780], label: "서울 시청" },
    { position: [37.5701, 126.9837], label: "경복궁" },
    { position: [37.5585, 126.9981], label: "서울역" },
  ];

  // 폴리라인 경로 (마커의 위치로 생성)
  const polylinePositions = markers.map((marker) => marker.position);

  return (
    <MapContainer center={[37.5665, 126.9780]} zoom={13} className="leaflet-container">
      {/* OSM 타일 추가 */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* 마커 추가 */}
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}

      {/* 마커를 연결하는 폴리라인 */}
      <Polyline positions={polylinePositions} />
    </MapContainer>
  );
};

export default MarkingLine;
