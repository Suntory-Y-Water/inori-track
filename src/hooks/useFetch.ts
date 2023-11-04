import { UseFetchProps } from '@/types/types';
import useSWR from 'swr';

type FetcherResponse<T> = T;

async function fetcher<T>(url: string): Promise<FetcherResponse<T>> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }
  return response.json();
}

export default function useFetch<T>({ url }: UseFetchProps) {
  const { data, error } = useSWR<T, Error>(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
