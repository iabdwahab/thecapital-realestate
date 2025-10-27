import { ValueData } from "@/types/values";
import IconGradientCard from "../global/IconGradientCard";

export default function ValueCard({ data }: { data: ValueData }) {
  const { title, description, icon } = data;

  return (
    <div
      tabIndex={0}
      className="bg-background group border-secondary-light max-lg:focus:bg-primary hover:bg-primary rounded-card-radius border p-6 transition duration-300"
    >
      <IconGradientCard icon={icon} />
      <div className="text-primary">
        <h3 className="text-body-large max-lg:group-focus:text-background group-hover:text-background mb-1">
          {title}
        </h3>
        <p className="text-body-small max-lg:group-focus:text-secondary-light group-hover:text-secondary-light">
          {description}
        </p>
      </div>
    </div>
  );
}
