import Image from "next/image";

export default function IconGradientCard() {
  return (
    <div className="gradient-bg-inside rounded-card-radius mb-2 w-fit p-3">
      <Image
        className="transition duration-300 group-hover:scale-125 max-lg:group-focus:scale-125"
        src="/icons/shield-empty.svg"
        alt="Sheild Icon"
        width={50}
        height={50}
      />
    </div>
  );
}
