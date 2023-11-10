import Link from "next/link";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function Nav({back}) {
  const linkHover = "hover:cursor-pointer text-gray-400 hover:text-gray-600 duration-300";
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between p-5 bg-black">
      <ul className="text-xl">
        <li>
          <Link
            href={`/${back||''}`}
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            <AiOutlineArrowLeft />
          </Link>{" "}
        </li>
      </ul>
      <ul className="flex gap-3">
        <li className={linkHover}>
          <Link href={"/projects"}>Projects</Link>
        </li>
        <li className={linkHover}>
          <Link href={"/study"}>Study</Link>
        </li>
        <li className={linkHover}>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
