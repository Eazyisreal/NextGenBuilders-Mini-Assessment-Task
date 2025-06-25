import { Button } from '@/atoms/Button';
import { CountryList } from '@/organisms/CountryList';
import { FilterBar } from '@/molecules/FilterBar';
import { Loader2 } from 'lucide-react';
import { useCountries } from '@/hooks/useCountries';

export function HomePage() {
  const {
    isLoading,
    isError,
    countries,
    totalCount,
    setSearch,
    setRegion,
    setSortOrder,
    setVisibleCount,
  } = useCountries();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="mb-8 flex flex-col gap-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight"> Country Explorer</h1>
        <p className="text-muted-foreground text-sm">Search and filter countries by name, region, and population.</p>
      </div>

      <FilterBar onSearch={setSearch} onRegion={setRegion} onSort={setSortOrder} />

      {isLoading && (
        <div className="flex justify-center items-center mt-20">
          <Loader2 className="animate-spin w-6 h-6 text-blue-600" />
          <span className="ml-2 text-muted-foreground">Loading countries...</span>
        </div>
      )}

      {isError && (
        <div className="text-center text-red-600 mt-10">
          <p>Oops! Something went wrong while fetching countries.</p>
        </div>
      )}

      {!isLoading && !isError && (
        <>
          <CountryList countries={countries} />
          {countries.length < totalCount && (
            <div className="flex justify-center mt-10">
              <Button
                variant="default"
                className="rounded-full px-6 py-2 text-sm"
                onClick={() => setVisibleCount((prev) => prev + 20)}
              >
                Load More <span className="ml-2 text-xs text-muted-foreground">({countries.length} / {totalCount})</span>
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
