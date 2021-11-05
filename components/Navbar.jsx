import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const { pathname } = useRouter();
  return (
    <nav
      className={`flex flex-row items-center md:w-3/5 m-auto py-10 ${pathname === "/" ? "justify-center" : "justify-between"
        }`}
    >
      {pathname !== "/" ? (
        <h2 className="text-2xl font-bold">The Mixed Stack</h2>
      ) : null}
      <ul className="flex flex-row w-1/3 items-center justify-between">
        <li>
          <Link href="/">
            <a>
              <h3 className="text-xl hover:bg-lightGray hover:rounded-full px-2 py-2 font-light">
                Home
              </h3>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>
              <h3 className="text-xl hover:bg-lightGray hover:rounded-full px-2 py-2 font-light">
                About
              </h3>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/posts">
            <a>
              <h3 className="text-xl hover:bg-lightGray hover:rounded-full px-2 py-2 font-light">
                Posts
              </h3>
            </a>
          </Link>
        </li>
        <li className="border-2 border-teal dark:border-teal flex flex-col items-center justify-center rounded-full p-2 cursor-pointer">
          <Image
            onClick={() =>
              theme === "light" ? setTheme("dark") : setTheme("light")
            }
            src={`${theme === "light" ? "/icons/moon.svg" : "/icons/sun.svg"}`}
            height={20}
            width={20}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
