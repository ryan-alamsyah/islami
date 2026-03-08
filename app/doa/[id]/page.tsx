import { axiosInstance } from "../.././lib/Axios";
import Link from "next/link";
import { BookOpenText, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ id: string }>;
}

export default async function DoaPage({ params }: Props) {
  const { id } = await params;
  const res = await axiosInstance.get(`/doa/${id}`);
  const data = await res.data.data;


  return (
    <div className="min-h-screen flex pt-10 pb-10 justify-center overflow-y-auto md:px-4 px-2">
      <div>
       
          <Link href={"/Home"} className="flex gap-2 mb-4">
            <ArrowLeft />
            Kembali
          </Link>
        

        <div className="rounded-2xl border-l-4 border-l-emerald-400 border border-white/30 w-96 md:w-146 ">
          <div className="bg-emerald-600/30  backdrop-blur-md border border-white/40 shadow-xl rounded-t-2xl p-4 flex items-center gap-4">
            <div className="bg-emerald-200/50  backdrop-blur-md inline-flex p-2 rounded-4xl">
              <BookOpenText />
            </div>

            <h1>{data.nama}</h1>
          </div>
          <div className="p-4">
            <div className="flex  justify-center mb-4">
              <p className="text-emerald-600 font-bold text-lg">Teks Arab</p>
            </div>
            <div className=" border p-4 rounded-lg border-white/30 bg-gray-500/30 flex-wrap">
              <p
                dir="rtl"
                style={{ fontFamily: "var(--font-amiri)" }}
                className="text-2xl text-right leading-loose md:leading-[2.5]"
              >
                {data.ar}
              </p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-emerald-600 mb-4 font-bold text-lg">
              Transliterasi
            </p>

            <div className=" border p-4 rounded-lg border-white/30 bg-gray-500/30">
              <p className="text-slate-400 italic ">{data.tr}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-emerald-600 mb-4 font-bold text-lg">
              Terjemahan
            </p>

            <div className=" border p-4 rounded-lg border-white/30 bg-gray-500/30">
              <p className="text-slate-400 ">{data.idn}</p>
            </div>
          </div>
          <div className="p-4">
            <p className="text-emerald-600 mb-4 font-bold text-lg">Hadis</p>

            <div className=" border p-4 rounded-lg border-white/30 bg-gray-500/30">
              <p className=" text-sm  leading-relaxed whitespace-pre-line font-thin">
                {data.tentang}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
