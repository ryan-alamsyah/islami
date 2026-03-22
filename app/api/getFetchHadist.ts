'use client';

import { useState } from "react"
import { AxiosHadist } from "../lib/AxiosHadist";

interface DataHadist {
    id: string;
    name: string;
    number: number | string;
    arab: string;
}

const getFetchHadist = () => {

    const [hadist, setHadist] =  useState<DataHadist[]>([])
    const [isLoading, setIsLoading] = useState(false);

    const fetchHadis = async (name: string, number: number | string) => {
        
        try {
            setIsLoading(true);
            const res = await AxiosHadist.get('/');
            const listHadist = res.data;
            setHadist(listHadist);
            console.log(listHadist)
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false)
        }
    }

    return {
        hadist,
        fetchHadis,
        isLoading
    }
}

export default getFetchHadist;