import Image from "next/image";
import IconGradientCard from "../global/IconGradientCard";

export default function ValueCard() {
  return (
    <div
      tabIndex={0}
      className="bg-background group border-secondary-light max-lg:focus:bg-primary hover:bg-primary rounded-card-radius border p-6 transition duration-300"
    >
      <IconGradientCard icon="" />
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
