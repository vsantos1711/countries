type cardProps = {
  name: string;
  population: string;
  img: string;
  link: string;
  region: string;
  capital: string;
};

export default function Card({
  name,
  population,
  img,
  link,
  region,
  capital,
}: cardProps) {
  return (
    <div>
      <img src={img} alt={name} className="max-w-[220px]" />
      <h1>
        <strong>Name: </strong>
        {name}
      </h1>
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
      <a href={link}>Link</a>
    </div>
  );
}
