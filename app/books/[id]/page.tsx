import { AxiosHadist } from "@/app/lib/AxiosHadist";
import Card from "@/components/Card";
import CardDetailHadist from "@/components/CardDetailHadist";
import CardList from "@/components/CardList";
interface Props {
  params: { id: string };
  searchParams: { range?: string };
}

interface Hadith {
  number: number;
  arab: string;
  id: string;
}

export default async function HadisDetail({ params }: Props) {
  const { id, number } = await params;

  try {
    const res = await AxiosHadist(`/books/${id}?range=1-100`);
    const data = res.data;

    return (
      <div className="w-full flex flex-wrap gap-6 justify-center pt-24 px-4">

        {data.data.hadiths.map((item: Hadith) => (
          <CardList 
          key={item.number}
          title={''}
          url={`/books/${id}/${number}`}
          hadis={`Hadis Nomor ke- ${item.number} Riwayat ${id} `}
          
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error("Gagal ambil data:", error);

    return <div>Gagal ambil data</div>;
  }
}

 
 
 

 