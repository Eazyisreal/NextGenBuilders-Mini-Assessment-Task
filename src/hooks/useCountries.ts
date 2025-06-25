/* eslint-disable import/order */

import { useMemo, useState } from 'react';

import type { Country } from '@/types';
import { useDebounce } from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';

const fetchCountries = async (): Promise<Array<Country>> => {
  const res = await fetch(
    'https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population'
  );
  if (!res.ok) throw new Error('Failed to fetch countries');
  return res.json();
};

export const useCountries = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');
  const [visibleCount, setVisibleCount] = useState(20);

  const debouncedSearch = useDebounce(search, 300);

  const { data = [], isLoading, isError, error } = useQuery({
    queryKey: ['countries'],
    queryFn: fetchCountries,
    staleTime: 1000 * 60 * 5,
  });

  const filtered = useMemo(() => {
    let result = [...data];
    
    if (debouncedSearch) {
      result = result.filter((c) =>
        c.name.common.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    
    if (region) {
      result = result.filter((c) => c.region === region);
    }
    
    if (sortOrder === 'asc') {
      result = result.sort((a, b) => a.population - b.population);
    } else if (sortOrder === 'desc') {
      result = result.sort((a, b) => b.population - a.population);
    }
    
    return result;
  }, [data, debouncedSearch, region, sortOrder]);

  return {
    countries: filtered.slice(0, visibleCount),
    totalCount: filtered.length, 
    isLoading,
    isError,
    error, 
    setSearch,
    setRegion,
    setSortOrder,
    setVisibleCount,
  };
};