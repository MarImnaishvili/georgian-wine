"use client";

import { GoogleMap, useJsApiLoader, InfoWindow, OverlayView } from "@react-google-maps/api";
import { useState } from "react";
import { stores, boroughColors, Store } from "@/data/stores";

const MAP_CENTER = { lat: 40.73, lng: -73.94 };

const MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#f5f0eb" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#1c1c1c" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#e5ddd3" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#e5ddd3" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9d8e8" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8B1A1A" }],
  },
];

function Pin({ color, onClick, active }: { color: string; onClick: () => void; active: boolean }) {
  return (
    <div
      onClick={onClick}
      style={{
        transform: "translate(-50%, -100%)",
        cursor: "pointer",
        filter: active ? "drop-shadow(0 4px 8px rgba(0,0,0,0.4))" : "drop-shadow(0 2px 4px rgba(0,0,0,0.25))",
        transition: "filter 0.2s",
      }}
    >
      <svg width="32" height="44" viewBox="0 0 32 44" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 0C7.163 0 0 7.163 0 16c0 10.5 16 28 16 28S32 26.5 32 16C32 7.163 24.837 0 16 0z"
          fill={color}
          stroke="white"
          strokeWidth="2"
        />
        <circle cx="16" cy="16" r="6" fill="white" />
      </svg>
    </div>
  );
}

export default function StoreMap({
  activeId,
  onSelect,
}: {
  activeId: number | null;
  onSelect: (id: number | null) => void;
}) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  const [infoStore, setInfoStore] = useState<Store | null>(null);

  const handlePinClick = (store: Store) => {
    setInfoStore(store);
    onSelect(store.id);
  };

  const handleClose = () => {
    setInfoStore(null);
    onSelect(null);
  };

  if (loadError)
    return (
      <div className="h-full flex items-center justify-center text-gray-400 text-sm">
        Map failed to load.
      </div>
    );

  if (!isLoaded)
    return (
      <div className="h-full flex items-center justify-center bg-[#f5f0eb]">
        <div className="text-gray-400 text-sm tracking-widest uppercase">Loading map…</div>
      </div>
    );

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={MAP_CENTER}
      zoom={11}
      options={{
        styles: MAP_STYLES,
        zoomControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: true,
      }}
      onClick={handleClose}
    >
      {stores.map((store) => (
        <OverlayView
          key={store.id}
          position={{ lat: store.lat, lng: store.lng }}
          mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        >
          <Pin
            color={boroughColors[store.borough]}
            onClick={() => handlePinClick(store)}
            active={store.id === activeId}
          />
        </OverlayView>
      ))}

      {infoStore && (
        <InfoWindow
          position={{ lat: infoStore.lat, lng: infoStore.lng }}
          onCloseClick={handleClose}
          options={{ pixelOffset: new window.google.maps.Size(0, -48) }}
        >
          <div style={{ fontFamily: "Georgia, serif", padding: "4px 6px", minWidth: 200 }}>
            <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6 }}>
              {infoStore.name}
            </div>
            <div
              style={{
                display: "inline-block",
                background: boroughColors[infoStore.borough],
                color: "#fff",
                fontSize: 10,
                fontFamily: "system-ui",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "2px 8px",
                marginBottom: 10,
              }}
            >
              {infoStore.borough}
            </div>
            <div style={{ fontSize: 13, color: "#444", marginBottom: 4 }}>
              {infoStore.address}
            </div>
            <div style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>
              {infoStore.hours}
            </div>
            <a
              href={infoStore.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "#8B1A1A",
                color: "#fff",
                fontSize: 11,
                fontFamily: "system-ui",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "6px 14px",
                textDecoration: "none",
              }}
            >
              Buy Online →
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
