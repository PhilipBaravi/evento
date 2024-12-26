import { FC } from "react";

type SkeletonProps = {
  className?: string;
};

const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`animate-pulse h-4 w-[550px] rounded-md bg-white/5 ${className}`}
    />
  );
};

export default Skeleton;
