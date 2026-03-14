'use client'
import { useState } from "react";
import { axiosInstance } from "../lib/Axios";

interface DetailDoa {
  id: string;
  nama: string;
}
const useFetchDoa = () => {
  const [isLoading, setIsLoading] = useState(false);
const [detailDoa, setDetailDoa] =useState()

  const fetchDoa = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get<DetailDoa>(`/doa/`);
      const listDoa = res.data;
      
     
      console.log(listDoa);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    fetchDoa,
    detailDoa
  };
};

export default useFetchDoa;
