import Image from "next/image";

type cardProps = {
  name: string;
  population: number;
  img: string;
  region: string;
  capital: string;
};

export default function Card({
  name,
  population,
  img,
  region,
  capital,
}: cardProps) {
  const numberFormat = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <div className="bg-white rounded flex  flex-col shadow text-slate-700 dark:bg-gray-900 dark:text-white transition-opacity animate-fade-in">
      <div className="relative h-40">
        <Image
          priority
          src={img}
          alt={name}
          fill
          className="object-cover border border-gray-200 dark:border-none rounded"
        />
      </div>
      <div className="px-4 py-2">
        <h1>{name}</h1>
        <p>
          <strong>Population: </strong>
          {numberFormat.format(population)}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital: </strong>
          {capital}
        </p>
      </div>
    </div>
  );
}
