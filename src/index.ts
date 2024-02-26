import fs from 'fs';

interface StateData {
  state: string;
  cities: string[];
}

interface CountryData {
  country: string;
  states: StateData[];
}

const data: CountryData[] = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

function getCountries(): string[] {
  return data.map(countryData => countryData.country);
}

function getStatesByCountry(countryName: string): string[] {
  const countryData = data.find(countryData => countryData.country === countryName);
  return countryData ? countryData.states.map(stateData => stateData.state) : [];
}

function getCitiesByState(stateName: string, countryName: string): string[] {
  const countryData = data.find(countryData => countryData.country === countryName);

  if (countryData) {
    const stateData = countryData.states.find(stateData => stateData.state === stateName);
    return stateData ? stateData.cities : [];
  }

  return [];
}

export { getCountries, getStatesByCountry, getCitiesByState };
