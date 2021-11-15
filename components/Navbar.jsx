import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState } from "react";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();
  return (
    <>
      <nav
        className={`md:flex hidden flex-row items-center max-w-2xl w-full mx-auto py-8  ${pathname === "/" ? "justify-center" : "justify-between"
          }`}
      >
        {pathname !== "/" ? (
          <h2 className="text-2xl font-bold">The Mixed Stack</h2>
        ) : null}
        <ul className="flex flex-row space-x-4 items-center justify-between">
          <li>
            <Link href="/">
              <a>
                <h3 className="text-lg hover:bg-lightGray hover:rounded-full px-2 py-2 font-light">
                  Home
                </h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <h3 className="text-lg hover:bg-lightGray hover:rounded-full px-2 py-2 font-light">
                  About
                </h3>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/allposts">
              <a>
                <h3 className="text-lg hover:bg-lightGray hover:rounded-full px-2 py-2 font-light">
                  Posts
                </h3>
              </a>
            </Link>
          </li>
          <li className="cursor-pointer">
            <Image
              alt="theme changer"
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
              src={`${theme === "light" ? "/icons/moon.svg" : "/icons/sun.svg"
                }`}
              height={30}
              width={30}
            />
          </li>
        </ul>
      </nav>
      <nav className="bg-white dark:bg-main flex md:hidden flex-row items-center justify-between w-full max-w-2xl mx-auto p-8">
        <ul className="flex flex-row items-center justify-between w-full">
          <li className="border-2 border-teal dark:border-teal flex flex-col items-center justify-center rounded-full p-2 cursor-pointer">
            <Image
              alt="theme changer"
              onClick={() =>
                theme === "light" ? setTheme("dark") : setTheme("light")
              }
              src={`${theme === "light" ? "/icons/moon.svg" : "/icons/sun.svg"
                }`}
              height={20}
              width={20}
            />
          </li>
          <li className="border-2 border-teal dark:border-teal flex flex-col items-center justify-center rounded-full p-2 cursor-pointer">
            <Image
              alt="hamburger menu"
              onClick={() => setOpen(!open)}
              src={`${theme === "light" ? "/icons/menu.svg" : "/icons/menu_white.svg"
                }`}
              height={20}
              width={20}
            />
          </li>
        </ul>
        {open && (
          <ul className=" transition-all fixed bottom-0 right-0 w-screen fles flex-col items-center bg-white dark:text-white text-black dark:bg-main space-y-4 py-3 rounded-tl-xl rounded-tr-xl border-t-2 border-teal">
            <li className="w-full flex flex-row items-center justify-center">
              <Link href="/">
                <a className="text-2xl">Home</a>
              </Link>
            </li>
            <li className="w-full flex flex-row items-center justify-center">
              <Link href="/about">
                <a className="text-2xl">About</a>
              </Link>
            </li>
            <li className="w-full flex flex-row items-center justify-center">
              <Link href="/allposts">
                <a className="text-2xl">Posts</a>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
