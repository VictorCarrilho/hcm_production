import useSWR from 'swr';
import api from '../services/api';

/* 
    useFetch é um hook customizado que estamos criando. 
    Dentro dele tem a chamada para um um outro hook customizado useSWR 
    que importamos da biblioteca SWR
*/
export function useFetch<Data = any>(url: string) {
    const { data, error, mutate } = useSWR<Data, Error>(url, async url => {
        const response = await api.get(url);

        return response.data;
    })

    return { data, error, mutate };
} 