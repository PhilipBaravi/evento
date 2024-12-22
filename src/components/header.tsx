import { FC, Fragment } from "react";
import Link from "next/link";
import Logo from "./logo";
import { Route } from "@/types/routes";

const Header: FC = () => {
  const routes: Route[] = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Events",
      path: "/events",
    },
  ];

  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Logo />

      <nav>
        <ul className="flex gap-x-6 text-sm">
          {routes.map((el) => {
            return (
              <Fragment key={el.id}>
                <li className="text-white/50 hover:text-white transition">
                  <Link href={el.path}>{el.name}</Link>
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
