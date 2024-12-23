import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Logo: FC = () => {
  return (
    <Link href="/">
      <Image
        src="https://bytegrad.com/course-assets/react-nextjs/evento.png"
        alt="logo"
        width={53}
        height={12}
      />
    </Link>
  );
};

export default Logo;
