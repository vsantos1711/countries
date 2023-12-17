import Link from "next/link";

export default function Head() {
  return (
    <nav className="flex justify-around bg-white p-3 shadow ">
      <Link href={"/"}>
        <button>Where in the world?</button>
      </Link>
    </nav>
  );
}
