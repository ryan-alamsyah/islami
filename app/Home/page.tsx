import { axiosInstance } from "../lib/Axios";
import DoaList from "./DoaList";
import { Suspense } from "react";
import Loading from "../doa/[id]/loading";

// Fungsi Fetching (Terjadi di Server)
async function getData() {
  try {
    const res = await axiosInstance.get("/doa");
    // Pastikan ini me-return array [{}, {}]
    return res.data.data;
  } catch (error) {
    console.error("Gagal ambil data:", error);
    return [];
  }
}

const HeroPage = async () => {
  const data = await getData();

  return (
    <section className="min-h-screen border-b border-white/10 flex flex-col items-center mt-8">
      <div className="flex flex-col items-center justify-center py-10 gap-8 w-full">
        
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-sky-300 text-4xl md:text-5xl font-bold mb-2">
            Kumpulan Doa Harian
          </h1>
          <p className="text-slate-400">Temukan doa harian sesuai kebutuhanmu</p>
        </div>

        {/* Content Section */}
        <div className="w-full px-6">
          {/* Kita bungkus DoaList dengan Suspense jika ingin streaming */}
          <Suspense fallback={<Loading />}>
            <DoaList initialData={data} />
          </Suspense>
        </div>

      </div>
    </section>
  );
};

export default HeroPage;