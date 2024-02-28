import fs from 'fs';

interface StateData {
  state: string;
  cities: string[];
}

interface CountryData {
  country: string;
  states: StateData[];
}

const dataFilePath = './data.json';

async function readDataFile(): Promise<CountryData[]> {
  try {
    const fileContent = await fs.promises.readFile(dataFilePath, 'utf-8');
    return JSON.parse(fileContent) as CountryData[];
  } catch (error) {
    console.error('Error reading or parsing data file:', error);
    return [];
  }
}

async function getCountries(): Promise<string[]> {
  const data = await readDataFile();
  return data.map(countryData => countryData.country);
}

async function getStatesByCountry(countryName: string): Promise<string[]> {
  const data = await readDataFile();
  const countryData = data.find(countryData => countryData.country === countryName);
  return countryData ? countryData.states.map(stateData => stateData.state) : [];
}

async function getCitiesByState(stateName: string, countryName: string): Promise<string[]> {
  const data = await readDataFile();
  const countryData = data.find(countryData => countryData.country === countryName);
  
  if (countryData) {
    const stateData = countryData.states.find(stateData => stateData.state === stateName);
    return stateData ? stateData.cities : [];
  }

  return [];
}

export { getCountries, getStatesByCountry, getCitiesByState };
