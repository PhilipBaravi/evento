import { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Image
      src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
      alt="logo"
      width={53}
      height={12}
    />
  );
};

export default Logo;