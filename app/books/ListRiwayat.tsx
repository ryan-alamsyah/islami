'use client';

import { useState } from "react";
import Card from "@/components/Card";
import CardList from "@/components/CardList";


interface Hadis {
  id: string;
  nama: string;
  grup: string;
  tentang: string;
  name: string;
  number: number;
  available: string;
}

export default function ListRiwayat({ initialData = [] }: { initialData: Hadis[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  

  // Filter data berdasarkan input
  const filtered = initialData.filter((hadis) =>
   hadis.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center w-full gap-8">
      {/* Search Input */}
       <div>
          <h1 className="text-sky-300 text-4xl md:text-5xl font-bold mb-2">
            Kumpulan Hadis
          </h1>
        </div>
     

    

      {/* Grid Content */}
      <div className="w-full flex flex-wrap gap-6 justify-center">
        {filtered.length > 0 ? (
          
          filtered.map((item) => (

            <CardList
              key={item.id}
              title={item.name}
              hadis={`Jumlah: ${item.available} Hadis`}
              url={`/books/${item.id}?range=1-100`}
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