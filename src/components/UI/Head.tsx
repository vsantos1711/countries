import Btn from "@/components/UI/Button";
import Link from "next/link";

export default function Head() {
  return (
    <nav className=" flex justify-around py-4 gap-2 dark:bg-gray-900 shadow  ">
      <Link href={"/"}>
        <button className=" text-base drop-shadow-lg sm:text-2xl text-wrap ">
          Where in the world?
        </button>
      </Link>
      <Btn />
    </nav>
  );
}
