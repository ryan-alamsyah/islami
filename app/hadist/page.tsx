import Card from "@/components/Card";
import { AxiosHadist } from "../lib/AxiosHadist";
import { Suspense } from "react";
import HadisList from "./HadisList";
import Loading from "../doa/[id]/loading";

const getHadist = async () => {
  try {
    const response = await AxiosHadist.get("/books");
    console.log(response)

    return response.data.data
  } catch (error) {
    console.log(error);
    return [];
  }
};

const HadisPage = async () => {
  const data = await getHadist();
  console.log(data);
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="w-full px-6">
          {/* Kita bungkus DoaList dengan Suspense jika ingin streaming */}
          <Suspense fallback={<Loading />}>
            <HadisList initialData={data} />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default HadisPage;
