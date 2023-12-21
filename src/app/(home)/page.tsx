import Card from "@/components/Card/Card";

async function getCountries() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  return res.json();
}
export default async function Home() {
  const countries = await getCountries();

  return (
    <main className="min-h-screen dark:bg-gray-800 mx-auto ">
      <div className="flex justify-center items-center flex-wrap gap-4 py-5 px-10">
        {countries.map((country: any) => (
          <Card
            key={country.name.common}
            img={country.flags.svg}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </div>
    </main>
  );
}
