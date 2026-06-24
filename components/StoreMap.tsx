"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { stores, boroughColors, Store } from "@/data/stores";

function makeIcon(color: string) {
  return L.divIcon({
    className: "",
    iconSize: [32, 42],
    iconAnchor: [16, 42],
    popupAnchor: [0, -44],
    html: `
      <svg width="32" height="42" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 10 16 26 16 26S32 26 32 16C32 7.163 24.837 0 16 0z"
          fill="${color}" stroke="white" stroke-width="2"/>
        <circle cx="16" cy="16" r="6" fill="white"/>
      </svg>`,
  });
}

export default function StoreMap({ activeId, onSelect }: {
  activeId: number | null;
  onSelect: (id: number) => void;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <MapContainer
      center={[40.73, -73.94]}
      zoom={11}
      style={{ height: "100%", width: "100%" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
        <Marker
          key={store.id}
          position={[store.lat, store.lng]}
          icon={makeIcon(boroughColors[store.borough])}
          eventHandlers={{ click: () => onSelect(store.id) }}
        >
          <Popup>
            <div style={{ fontFamily: "system-ui", minWidth: 180 }}>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>
                {store.name}
              </div>
              <div style={{ color: "#666", fontSize: 13 }}>{store.borough}</div>
              <div style={{ marginTop: 6, fontSize: 13 }}>{store.address}</div>
              <div style={{ marginTop: 4, fontSize: 13, color: "#666" }}>
                {store.hours}
              </div>
              <a
                href={store.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  background: "#8B1A1A",
                  color: "white",
                  padding: "6px 14px",
                  fontSize: 11,
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Buy Online →
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
