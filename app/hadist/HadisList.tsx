'use client';

import { useState } from "react";
import Card from "@/components/Card";

interface Hadis {
  id: string;
  nama: string;
  grup: string;
  tentang: string;
  name: string;
  number: number;
  available: string;
}

export default function HadisList({ initialData = [] }: { initialData: Hadis[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  

  // Filter data berdasarkan input
  const filtered = initialData.filter((hadis) =>
   hadis.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full gap-8">
      {/* Search Input */}
      <div className="w-full max-w-md px-4">
        <input
          type="text"
          placeholder="Cari nama doa..."
          className="w-full px-5 py-3 rounded-full bg-slate-900/50 border border-white/10 text-white focus:outline-none focus:border-sky-500 transition-all shadow-lg backdrop-blur-sm"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

    

      {/* Grid Content */}
      <div className="w-full flex flex-wrap gap-6 justify-center">
        {filtered.length > 0 ? (
          
          filtered.map((item) => (
            
            <Card
              key={item.id}
              title={item.name}
              grup={item.grup}
              hadis={item.available}
              url={`${item.id}?range=11-20`}
            />

            
          ))
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-3xl w-full max-w-2xl">
            <p className="text-gray-500">Doa tidak ditemukan.</p>
          </div>
        )}
      </div>
    </div>
  );
}