import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import SearchInput from '../components/atoms/search-input';

const Map = () => {
  return (
    <div className="flex w-screen h-screen pb-24">
      <SearchInput className="absolute top-4 z-10 w-11/12 my-4 left-1/2 -translate-x-1/2" />
      <MapContainer center={[31.073, -8.407]} zoom={8} className="w-full h-full z-[5]" zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default Map;
