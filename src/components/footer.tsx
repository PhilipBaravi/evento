import { FC, Fragment } from "react";
import { Route } from "@/types/routes";
import Link from "next/link";

const Footer: FC = () => {
  const routes: Route[] = [
    {
      id: 1,
      path: "/terms-conditions",
      name: "Terms & Conditions",
    },
    {
      id: 2,
      path: "/privacy-policy",
      name: "Privacy & Policy",
    },
  ];
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 ByteGrad. All rights reserved.
      </small>
      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((el) => {
          return (
            <Fragment key={el.id}>
              <li>
                <Link href={el.path}>{el.name}</Link>
              </li>
            </Fragment>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
