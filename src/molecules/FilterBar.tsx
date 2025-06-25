import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/atoms/Button';
import { Input } from '@/atoms/Input';

type Props = {
  onSearch: (v: string) => void;
  onRegion: (v: string) => void;
  onSort: (v: 'asc' | 'desc' | '') => void;
};

export function FilterBar({ onSearch, onRegion, onSort }: Props) {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-100 shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
        <div className="relative w-full">
          <Input
            placeholder="🔍 Search by name"
            onChange={(e) => onSearch(e.target.value)}
            className="w-full bg-white/80 border border-amber-200 focus-visible:ring-amber-400 focus-visible:border-amber-400 placeholder:text-amber-600/70 shadow-sm text-sm rounded-lg"
          />
        </div>

        <div className="w-full">
          <Select onValueChange={onRegion}>
            <SelectTrigger className="w-full bg-white/80 border border-amber-200 focus-visible:ring-amber-400 text-amber-900 text-sm rounded-lg shadow-sm">
              <SelectValue placeholder="Filter by region" />
            </SelectTrigger>
            <SelectContent className="bg-white border-amber-200 rounded-lg shadow-lg">
              <SelectItem value="Africa" className="hover:bg-amber-50">Africa</SelectItem>
              <SelectItem value="Americas" className="hover:bg-amber-50">Americas</SelectItem>
              <SelectItem value="Asia" className="hover:bg-amber-50">Asia</SelectItem>
              <SelectItem value="Europe" className="hover:bg-amber-50">Europe</SelectItem>
              <SelectItem value="Oceania" className="hover:bg-amber-50">Oceania</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-2 w-full justify-center md:justify-end">
          <Button
            onClick={() => onSort('asc')}
            className="bg-amber-600 hover:bg-amber-700 text-white text-sm px-4 py-2 rounded-lg"
            title="Sort by population: Smallest to Largest"
          >
            ↑ Smallest Pop
          </Button>
          <Button
            onClick={() => onSort('desc')}
            className="bg-orange-600 hover:bg-orange-700 text-white text-sm px-4 py-2 rounded-lg"
            title="Sort by population: Largest to Smallest"
          >
            ↓ Largest Pop
          </Button>
        </div>
      </div>
    </div>
  );
}
