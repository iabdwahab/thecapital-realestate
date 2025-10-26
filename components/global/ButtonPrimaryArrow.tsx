import Image from "next/image";

interface Props {
  className?: string;
  text: string;
}

export default function ButtonPrimaryArrow({ className, text }: Props) {
  return (
    <button className={`${className} btn-primary flex items-center justify-center gap-2`}>
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
    </button>
  );
}
