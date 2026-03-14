"use client";
import Card from "@/components/Card";
import { useFetchApi } from "../api/useFetchApi";
import { useEffect, useState } from "react";

const HeroPage = () => {
  const { fetchApi, doaSunnah, isLoading } = useFetchApi();
  const [searchQuery, setSearchQuery] = useState("");

  const filltered = doaSunnah.filter((doa) =>
    doa.nama.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const HandleUpdateApi = () => {
    fetchApi();
    console.log(doaSunnah)
  };
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <section className="min-h-screen border-b border-white/10 flex items-center justify-center mt-8">
      <div className="flex flex-col items-center justify-center py-10 gap-8">
        {/* Search Bar Section */}
        <div className="w-full max-w-md px-4">
          <input
            className="w-full bg-slate-800 text-white p-3 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
            placeholder="Cari doa harian..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-sky-300 text-4xl md:text-5xl font-bold mb-2">
            Kumpulan Doa Harian
          </h1>
        
        </div>
        <button
          className="mt-8 px-6 py-2 border border-slate-700 text-slate-400 hover:text-white hover:border-emerald-500 rounded-full transition-all text-sm"
          onClick={HandleUpdateApi}
        >
          Muat Ulang
        </button>

        {/* Content Section */}
        <div className="w-full  px-6 h-min-screen">
          {/* 1. State: Loading */}
          {isLoading && (
            <div className="flex flex-col items-center gap-4 py-10">
              <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-emerald-400 animate-pulse">
                Memuat data doa...
              </p>
            </div>
          )}

          {/* 2. State: Empty */}
          {!isLoading && filltered.length === 0 && (
            <div className="text-center py-20 border-2 border-dashed border-slate-800 rounded-3xl">
              <p className="text-gray-500">Belum ada doa yang ditemukan.</p>
            </div>
          )}

          {/* 3. State: Success / Mapping */}
          {!isLoading && filltered.length > 0 && (
            <div className="flex flex-wrap gap-6 justify-center">
              {filltered.map((item) => (
                <Card
                  key={item.id}
                  title={item.nama}
                  grup={item.grup}
                  hadis={item.tentang}
                  url={`/doa/${item.id}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
