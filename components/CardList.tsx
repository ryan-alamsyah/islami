import { BookOpen } from "lucide-react";
import Link from "next/link";

type CardProps = {
  title: string;
  hadis: string;
  url: string;
};

const CardList = ({ title, hadis, url }: CardProps) => {
  return (
    <>
      <div className="h-auto w-96 shadow-md border border-sky-800 rounded-2xl p-4 gap-4 flex flex-col">
        <div className="bg-white/10 backdrop-blur-lg flex  flex-col gap-2 p-4">
          <h1 className="text-md">{title}</h1>
          <p className="inline-flex mt-2 text-xs px-2 py-1 font-bold text-sky-500 border border-sky-400 rounded-full">
            {hadis}
          </p>
        </div>
        
        <Link href={url} className="bg-sky-500 hover:bg-sky-600 text-black flex gap-2 w-full p-1 justify-center items-center rounded-2xl"
        >
          <BookOpen size={14} /> Detail
        </Link>
      </div>
    </>
  );
};

export default CardList;
