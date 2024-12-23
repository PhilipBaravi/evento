import { FC } from "react";
type H1Props = {
  children: React.ReactNode;
};

const H1: FC<H1Props> = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold tracking-tight lg:text-6xl">
      {children}
    </h1>
  );
};

export default H1;
