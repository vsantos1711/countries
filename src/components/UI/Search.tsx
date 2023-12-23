type SearchBarProps = {
  setCountry: (country: string) => void;
};

export default function SearchBar({ setCountry }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search for a country..."
      onChange={({ target }) => setCountry(target.value)}
      className="max-w-sm h-10 px-5 rounded-md border border-slate-200 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100 "
    />
  );
}
