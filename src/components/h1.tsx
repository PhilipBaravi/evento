import { FC } from "react";
type H1Props = {
  children: React.ReactNode;
  className?: string;
};

const H1: FC<H1Props> = ({ children, className }) => {
  return (
    <h1
      className={`text-3xl font-bold tracking-tight lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
