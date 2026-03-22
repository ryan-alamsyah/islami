// app/hadist/[name]/page.tsx
import { AxiosHadist } from "@/app/lib/AxiosHadist";
import HadisSelected from "./HadistSelected";

interface PageProps {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ range?: string }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  // 1. Ambil nilai 'name' (ahmad) dan 'range' (11-20)
  const { name } = await params;
  const { range } = await searchParams;

  // 2. Tentukan default range jika user tidak mengetikkan di URL
  const currentRange = range || "1-10";

  // 3. Panggil API menggunakan range tersebut
  // Berdasarkan gambar network yang kamu berikan, struktur data ada di res.data.data
  let hadisData = [];
  try {
    const res = await AxiosHadist.get(`/${name}?range=${currentRange}`);
    hadisData = res.data.data.hadiths || []; 
    console.log(hadisData)
  } catch (error) {
    console.error("Gagal mengambil data hadist:", error);
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold capitalize mb-4">
        Hadist {name} - Range: {currentRange}
      </h1>

      {/* 4. Kirim data ke komponen HadisList */}
      <HadisSelected initialData={hadisData} name={name} currentRange={currentRange} />
    </main>
  );
}