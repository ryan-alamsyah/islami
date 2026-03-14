// app/doa/[id]/page.tsx
import { axiosInstance } from "../.././lib/Axios";
import Link from "next/link";
import { BookOpenText, ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import Loading from "./loading";

interface Props {
  params: Promise<{ id: string }>;
}

// 1. Komponen terpisah untuk Fetch Data
async function DoaContent({ id }: { id: string }) {
  const res = await axiosInstance.get(`/doa/${id}`);
  const data = res.data.data;

  return (
    <div className="rounded-2xl border-l-4 border-l-emerald-400 border border-white/30 w-96 md:w-146 ">
      <div className="bg-emerald-600/30 backdrop-blur-md border border-white/40 shadow-xl rounded-t-2xl p-4 flex items-center gap-4">
        <div className="bg-emerald-200/50 backdrop-blur-md inline-flex p-2 rounded-4xl">
          <BookOpenText />
        </div>
        <h1>{data.nama}</h1>
      </div>
      
      {/* Bagian Arab */}
      <div className="p-4">
        <p className="text-emerald-600 font-bold text-lg mb-4 text-center">Teks Arab</p>
        <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
          <p dir="rtl" style={{ fontFamily: "var(--font-amiri)" }} className="text-2xl text-right leading-loose md:leading-[2.5]">
            {data.ar}
          </p>
        </div>
      </div>

      {/* Bagian Terjemahan & Hadis */}
      <div className="p-4 space-y-8">
        <div>
          <p className="text-emerald-600 mb-4 font-bold text-lg">Transliterasi</p>
          <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
            <p className="text-slate-400 italic">{data.tr}</p>
          </div>
        </div>
        <div>
          <p className="text-emerald-600 mb-4 font-bold text-lg">Terjemahan</p>
          <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
            <p className="text-slate-400">{data.idn}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. Main Page tetap sinkron untuk render Layout secepat mungkin
export default async function DoaPage({ params }: Props) { 
  const { id } = await params;

  return (
    <div className="min-h-screen flex pt-10 pb-10 justify-center overflow-y-auto md:px-4 px-2 text-white">
      <div>
        <Link href={"/Home"} className="flex gap-2 mb-4 hover:text-emerald-400 transition-colors">
          <ArrowLeft />
          Kembali
        </Link>
        
        {/* Suspense sekarang akan aktif karena DoaContent adalah async */}
        <Suspense fallback={<Loading />}>
          <DoaContent id={id} />
        </Suspense>
      </div>
    </div>
  );
}