'use client';
import { useState } from 'react';
import { MapPin, Search } from 'lucide-react';

export default function MapPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const properties = [
    { id: 1, title: "Victoria Island Penthouse", lat: 6.4281, lng: 3.4217, price: "₦850M" },
    { id: 2, title: "Lekki Luxury Villa", lat: 6.4698, lng: 3.5852, price: "₦245M" },
    { id: 3, title: "Abuja Executive Home", lat: 9.0765, lng: 7.3986, price: "₦180M" },
  ];

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-2">Property Map</h1>
        <p className="text-gray-400 mb-8">Explore properties across Nigeria on the interactive map</p>

        <div className="relative mb-8 max-w-md">
          <Search className="absolute left-4 top-4 text-gray-400" />
          <input type="text" placeholder="Search locations..." className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-12 text-white" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="bg-zinc-900 border border-white/10 rounded-3xl h-[600px] flex items-center justify-center relative overflow-hidden">
          <div className="text-center">
            <div className="text-6xl mb-6">🗺️</div>
            <h3 className="text-2xl font-semibold mb-3">Interactive Map Coming Soon</h3>
            <p className="text-gray-400 max-w-md mx-auto">Full map integration with property pins, filters, and click-to-view details will be added in the next update.</p>
          </div>

          {properties.map((prop, index) => (
            <div key={prop.id} className="absolute bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg cursor-pointer hover:scale-110 transition" style={{ top: `${30 + index * 25}%`, left: `${25 + index * 20}%` }}>{prop.price}</div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">Full Leaflet Map with real pins will be implemented after basic structure is live.</div>
      </div>
    </div>
  );
}