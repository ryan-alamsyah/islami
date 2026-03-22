


type ListProps = {
    number: number;
    arab: string;
    id: string;
}
const ListComponent = ({number, arab, id, } : ListProps) => {

    return (
        <>
         <div className="rounded-2xl border-l-4 border-l-sky-400 border border-white/30 w-96 md:w-146 ">
      <div className="bg-sky-600/30 backdrop-blur-md border border-white/40 shadow-xl rounded-t-2xl p-4 flex items-center gap-4">
        
        <h1>{number}</h1>
      </div>
      
      {/* Bagian Arab */}
      <div className="p-4">
        <p className="text-sky-600 font-bold text-lg mb-4 text-center">Teks Arab</p>
        <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
          <p dir="rtl" style={{ fontFamily: "var(--font-amiri)" }} className="text-2xl text-right leading-loose md:leading-[2.5]">
            {arab}
          </p>
        </div>
      </div>

      {/* Bagian Terjemahan & Hadis */}
      <div className="p-4 space-y-8">
        
        <div>
          <p className="text-sky-600 mb-4 font-bold text-lg">Terjemahan</p>
          <div className="border p-4 rounded-lg border-white/30 bg-gray-500/30">
            <p className="text-slate-400">{id}</p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default ListComponent