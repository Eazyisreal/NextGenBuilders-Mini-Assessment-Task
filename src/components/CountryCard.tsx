/* eslint-disable import/order */

import { Card } from '@/atoms/Card';
import type { Country } from '@/types';

export function CountryCard({ country }: { country: Country }) {
  return (
    <Card className="w-full max-w-sm p-4 shadow-md">
      <img src={country.flags.png} alt={country.flags.alt || 'flag'} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold">{country.name.common}</h2>
      <p className="text-sm text-muted-foreground">Capital: {country.capital?.[0] || 'N/A'}</p>
      <p className="text-sm text-muted-foreground">Region: {country.region}</p>
      <p className="text-sm text-muted-foreground">Population: {country.population.toLocaleString()}</p>
    </Card>
  );
}