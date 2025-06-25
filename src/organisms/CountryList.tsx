import type { Country } from '@/types';
import { CountryCard } from '@/components/CountryCard';

export function CountryList({ countries }: { countries: Array<Country> }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-25 via-orange-25 to-yellow-25 p-6">
      <div className="max-w-7xl mx-auto">
        {countries.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌍</div>
            <h3 className="text-2xl font-semibold text-amber-800 mb-2">No countries found</h3>
            <p className="text-amber-600">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6">
            {countries.map((country) => (
              <CountryCard key={country.name.common} country={country} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}