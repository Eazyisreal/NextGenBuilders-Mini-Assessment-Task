export interface Country {
  name: {
    common: string;
  };
  capital: Array<string>;
  region: string;
  flags: {
    png: string;
    alt?: string;
  };
  population: number;
}