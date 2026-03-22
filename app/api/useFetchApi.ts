

import { useState } from "react"
import { axiosInstance } from "../lib/Axios";

interface DoaItem {
    id: number;
    nama: string;
    grup: string;
    tentang: string;
}

interface DoaResponse {
    data: DoaItem[];
}

export const useFetchApi = () => {
    const [doaSunnah, setDoaSunnah] = useState<DoaItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchApi = async () => {
        try {
            setIsLoading(true);

            const res = await axiosInstance.get<DoaResponse>("/doa");

            const dataArray = res.data.data;

            setDoaSunnah(dataArray);
            console.log(dataArray);

        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        fetchApi,
        doaSunnah,
        isLoading
    };
};