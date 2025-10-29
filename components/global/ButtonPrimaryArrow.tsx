import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  text: string;
  href: string;
}

export default function ButtonPrimaryArrow({ className, text, href }: Props) {
  return (
    <Link
      href={href}
      className={`${className} btn-primary flex w-fit items-center justify-center gap-2`}
    >
      <span>{text}</span>
      <span>
        <Image
          src="/icons/arrow-up.svg"
          alt="Arrow Icon"
          width={20}
          height={20}
          className="-rotate-90"
        />
      </span>
    </Link>
  );
}
