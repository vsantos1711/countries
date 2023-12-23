import Image from "next/image";

type cardProps = {
  name: string;
  population: string;
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
  return (
    <div className="bg-white rounded flex flex-col shadow w-[240px] text-slate-700 dark:bg-gray-900 dark:text-white">
      <div className="relative h-40">
        <Image
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
          {population}
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
