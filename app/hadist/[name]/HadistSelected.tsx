// HadisList.tsx
import Link from 'next/link';

type Hadith = {
  number: number;
  arab: string;
  id: string;
};

interface Props {
  initialData: Hadith[];
  name: string;
  currentRange: string;
}

export default function HadisSelected({ initialData, name, currentRange }: Props) {
  // Logika sederhana untuk menghitung range berikutnya
  const [start, end] = currentRange.split('-').map(Number);
  const nextRange = `${end + 1}-${end + 10}`;
  const prevRange = `${Math.max(1, start - 10)}-${start - 1}`;

  return (
    <div>
      {/* List Hadis */}
      {initialData.map((item) => (
        <div key={item.number} className="mb-4 p-4 border rounded">
          <p className="text-emerald-600 font-bold">Nomor {item.number}</p>
          <p dir="rtl" className="text-right text-xl">{item.arab}</p>
          <p className="mt-2 text-gray-600">{item.id}</p>
        </div>
      ))}

      {/* Navigasi Range */}
      <div className="flex gap-4 mt-8">
        <Link href={`/${name}?range=${prevRange}`} className="px-4 py-2 bg-gray-200 rounded">
          Sebelumnya
        </Link>
        <Link href={`/${name}?range=${nextRange}`} className="px-4 py-2 bg-sky-500 text-white rounded">
          Berikutnya
        </Link>
      </div>
    </div>
  );
}