import Image from "next/image";

export default function ValueCard() {
  return (
    <div
      tabIndex={0}
      className="bg-background group border-secondary-light max-lg:focus:bg-primary hover:bg-primary rounded-card-radius border p-6 transition duration-300"
    >
      <div className="gradient-bg-inside rounded-card-radius mb-2 w-fit p-3">
        <Image
          className="transition duration-300 group-hover:scale-125 max-lg:group-focus:scale-125"
          src="/icons/shield-empty.svg"
          alt="Sheild Icon"
          width={50}
          height={50}
        />
      </div>
      <div className="text-primary">
        <h3 className="text-body-large max-lg:group-focus:text-background group-hover:text-background mb-1">
          الشفافية
        </h3>
        <p className="text-body-small max-lg:group-focus:text-secondary-light group-hover:text-secondary-light">
          نضــع المســتثمر في قلــب العمليــــة ونوفر وضوحًا في جميع مراحل الاستثمار.
        </p>
      </div>
    </div>
  );
}
