"use client";

import { FC, Fragment } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Route } from "@/types/routes";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const Header: FC = () => {
  const activePathname = usePathname();

  const routes: Route[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "All Events",
      path: "/events/all",
    },
  ];

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav className="h-full">
        <ul className="flex gap-x-6 h-full text-sm">
          {routes.map((el) => {
            return (
              <Fragment key={el.id}>
                <li
                  className={`${
                    activePathname === el.path ? "text-white" : "text-white/50"
                  } hover:text-white transition relative flex items-center`}
                >
                  <Link href={el.path}>{el.name}</Link>
                  {activePathname === el.path && (
                    <motion.div
                      layoutId="header-active-link"
                      className="bg-accent h-1 w-full absolute bottom-0"
                    ></motion.div>
                  )}{" "}
                </li>
              </Fragment>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
