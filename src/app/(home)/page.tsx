import CountriesList from "./(components)/CountriesList";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}
export type CountryProp = {
  flags: {
    svg: string;
  };
  name: {
    common: string;
  };
  population: string;
  region: string;
  capital: string;
};

export default async function Home() {
  const countries: CountryProp[] = await getCountries();

  return (
    <main className="min-h-screen dark:bg-gray-800 py-14 ">
      <CountriesList data={countries} />
    </main>
  );
}
