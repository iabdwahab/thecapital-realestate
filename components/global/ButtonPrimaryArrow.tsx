import Image from "next/image";

interface Props {
  className?: string;
}

export default function ButtonPrimaryArrow({ className }: Props) {
  return (
    <button className={`${className} btn-primary flex items-center justify-center gap-2`}>
      <span>استثمر الآن</span>
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
