'use client';
import { useState } from 'react';
import { Search, MapPin, Bed, Bath, Square, Heart } from 'lucide-react';

const sampleProperties = [
  { id: 1, title: "Luxury Penthouse in Victoria Island", location: "Lagos, Nigeria", price: "₦850,000,000", type: "For Sale", beds: 5, baths: 6, sqft: "1,250", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9", category: "Luxury" },
  { id: 2, title: "Modern Family Home in Lekki", location: "Lagos, Nigeria", price: "₦245,000,000", type: "For Sale", beds: 4, baths: 4, sqft: "850", image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde", category: "Premium" },
  { id: 3, title: "Executive 3-Bedroom Apartment", location: "Abuja, Nigeria", price: "₦180,000,000", type: "For Rent", beds: 3, baths: 3, sqft: "650", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750", category: "Middle Class" }
];

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");

  const filteredProperties = sampleProperties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) || property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === "All" || property.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="pt-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-4">Featured Properties</h1>
        <p className="text-gray-400 mb-10">Discover homes that match your lifestyle and investment goals.</p>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-4 text-gray-400" />
            <input type="text" placeholder="Search by location or property name..." className="w-full bg-zinc-900 border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <select className="bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 text-white" value={filterType} onChange={(e) => setFilterType(e.target.value)}>
            <option value="All">All Properties</option>
            <option value="For Sale">For Sale</option>
            <option value="For Rent">For Rent</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-zinc-900 rounded-2xl overflow-hidden border border-white/10 hover:border-yellow-400/50 transition group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={property.image} alt={property.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur px-3 py-2 rounded-full"><Heart size={20} className="text-white hover:text-yellow-400" /></div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"><span className="inline-block bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">{property.type}</span></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 line-clamp-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4"><MapPin size={16} /><p className="text-sm">{property.location}</p></div>
                
                <div className="flex gap-4 text-sm text-gray-400 mb-6 pb-6 border-b border-white/10">
                  <div className="flex items-center gap-1"><Bed size={16} /> {property.beds} beds</div>
                  <div className="flex items-center gap-1"><Bath size={16} /> {property.baths} baths</div>
                  <div className="flex items-center gap-1"><Square size={16} /> {property.sqft} sqft</div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-2xl font-bold gold-text">{property.price}</div>
                  <button className="bg-yellow-400 text-black px-4 py-2 rounded-full font-medium hover:bg-yellow-300 transition text-sm">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProperties.length === 0 && <div className="text-center py-12"><p className="text-gray-400 text-lg">No properties found matching your criteria.</p></div>}
      </div>
    </div>
  );
}