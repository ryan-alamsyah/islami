import { AxiosHadist } from "@/app/lib/AxiosHadist"
import { BookOpenText, ArrowLeft } from "lucide-react";
import { Suspense } from "react";
import Link from "next/link";
import Loading from "@/app/doa/[id]/loading";

interface Props {
    params: Promise<{id: string, number: number}>
}


const DetailRiwayat = async ({ id, number }: { id: string; number: number }) => {
    const res = await AxiosHadist.get(`/books/${id}/${number}`)
    const data = res.data.contents;

    return (
     
        <div className="rounded-2xl border-l-4 border-l-sky-400 border border-white/30 w-96 md:w-146 ">
      <div className="bg-sky-600/30 backdrop-blur-md border border-white/40 shadow-xl rounded-t-2xl p-4 flex items-center gap-4">
        <div className="bg-sky-200/50 backdrop-blur-md inline-flex p-2 rounded-4xl">
          <BookOpenText />
        </div>
        <h1>{data.nama}</h1>
      </div>
      
      {/* Bagian Arab */}
      <div className="p-4">
        <p className="text-sky-600 font-bold text-lg mb-4 text-center">Teks Arab</p>
        <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
          <p dir="rtl" style={{ fontFamily: "var(--font-amiri)" }} className="text-2xl text-right leading-loose md:leading-[2.5]">
            {data.ar}
          </p>
        </div>
      </div>

      {/* Bagian Terjemahan & Hadis */}
      <div className="p-4 space-y-8">
        <div>
          <p className="text-sky-600 mb-4 font-bold text-lg">Transliterasi</p>
          <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
            <p className="text-slate-400 italic">{data.tr}</p>
          </div>
        </div>
        <div>
          <p className="text-sky-600 mb-4 font-bold text-lg">Terjemahan</p>
          <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
            <p className="text-slate-400">{data.idn}</p>
          </div>
        </div>
      </div>
    </div>
  );
        
}


export default async function DetailHadisPage({ params }: Props) { 
  const { id, number } = await params;

  return (
    <div className="min-h-screen flex pt-10 pb-10 justify-center overflow-y-auto md:px-4 px-2 text-white">
      <div className="pt-12">
        
        
        {/* Suspense sekarang akan aktif karena DoaContent adalah async */}
        <Suspense fallback={<Loading />}>
        <Link href={"/Doa"} className="inline-flex px-2 py-1 rounded gap-2 mb-4 hover:bg-sky-800 transition-colors  ">
          <ArrowLeft />
          Kembali
        </Link>
          <DetailRiwayat id={id} number={number} />
        </Suspense>
      </div>
    </div>
  );
}